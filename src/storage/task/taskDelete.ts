import AsyncStorage from '@react-native-async-storage/async-storage'
import { fetchTasks } from './fetchTasks'
import { TASK_COLLECTION } from '../storageConfig'

export async function taskDelete(id: string) {
  const stored = await fetchTasks()
  const tasks = stored.filter((task) => task.id !== id)

  await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(tasks))
}
