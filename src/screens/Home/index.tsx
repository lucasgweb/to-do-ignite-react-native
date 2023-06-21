import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  FlatList,
  Alert,
} from 'react-native'
import { styles } from './styles'
import logoImage from './imgs/logo.png'
import iconAdd from './imgs/icon-add.png'
import clipboardImage from './imgs/clipboard.png'
import { CircularCounter } from '../../components/CircularCounter'
import { useEffect, useState } from 'react'
import { taskCreate } from '../../storage/task/taskCreate'
import { fetchTasks } from '../../storage/task/fetchTasks'
import { Task } from '../../components/Task'
import { taskDelete } from '../../storage/task/taskDelete'
import { taskUpdate } from '../../storage/task/taskUpdate'

export interface ITask {
  id: string
  description: string
  isConcluded: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [taskDescription, setTaskDescription] = useState<string>('')
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleBlur,
    )

    return () => {
      keyboardDidHideListener.remove()
    }
  }, [])

  async function fetchAllTasks() {
    try {
      const tasks = await fetchTasks()
      setTasks(tasks)
    } catch (error) {}
  }

  async function handleTaskAdd() {
    if (!taskDescription) {
      Alert.alert(
        'Descrição da tarefa vazia',
        'A descrição da tarefa não pode ser vazia. Por favor, forneça uma descrição válida.',
      )
      return
    }
    const existingTask = tasks.find(
      (task) => task.description === taskDescription,
    )
    if (existingTask) {
      Alert.alert(
        'Tarefa já existe',
        'Não é possível adicionar uma nova tarefa com a mesma descrição.',
      )
      return
    }
    const newTask: ITask = {
      id: taskDescription,
      description: taskDescription,
      isConcluded: false,
    }
    await taskCreate(newTask)

    await fetchAllTasks()
    setTaskDescription('')
  }

  async function handleTaskRemove(id: string) {
    Alert.alert('Remover', 'Você realmente deseja remover essa tarefa?', [
      {
        text: 'Sim',
        async onPress() {
          await taskDelete(id)
          await fetchAllTasks()
          return
        },
      },
      {
        text: 'Não',
      },
    ])
  }

  async function handleTaskCheckedChange(task: ITask) {
    const updatedTask = { ...task, isConcluded: !task.isConcluded }
    await taskUpdate(updatedTask)
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === updatedTask.id ? updatedTask : prevTask,
      ),
    )
  }

  useEffect(() => {
    fetchAllTasks()
  }, [])

  return (
    <>
      <View style={styles.header}>
        <Image source={logoImage} alt="logo" />
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={isFocused ? styles.inputFocused : styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={setTaskDescription}
            maxLength={85}
            value={taskDescription}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Image source={iconAdd} alt="icon-add" />
          </TouchableOpacity>
        </View>
        <View style={styles.counters}>
          <CircularCounter
            number={tasks.length}
            textColor="#4EA8DE"
            text="Criadas"
          />
          <CircularCounter
            number={tasks.filter((task) => task.isConcluded === true).length}
            textColor="#8284FA"
            text="Concluídas"
          />
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id}
          renderItem={({ item }) => (
            <Task
              onCheck={() => handleTaskCheckedChange(item)}
              isConcluded={item.isConcluded}
              description={item.description}
              onDelete={() => handleTaskRemove(item.id)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Image source={clipboardImage} alt="clipboard" />
              <Text style={styles.listEmptyTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyDescription}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  )
}
