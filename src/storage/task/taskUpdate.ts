import AsyncStorage from '@react-native-async-storage/async-storage'
import { fetchTasks } from './fetchTasks'
import { TASK_COLLECTION } from '../storageConfig'
import { ITask } from '../../screens/Home'

export async function taskUpdate(updatedTask: ITask) {
  const stored = await fetchTasks()
  const tasks = stored.map((task) => {
    if (task.id === updatedTask.id) {
      return { ...task, ...updatedTask }
    }
    return task
  })

  await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(tasks))
}
