import AsyncStorage from '@react-native-async-storage/async-storage'
import { TASK_COLLECTION } from '../storageConfig'
import { ITask } from '../../screens/Home'

export async function fetchTasks() {
  // eslint-disable-next-line no-useless-catch
  try {
    const storage = await AsyncStorage.getItem(TASK_COLLECTION)

    const tasks: ITask[] = storage ? JSON.parse(storage) : []

    return tasks
  } catch (error) {
    throw error
  }
}
