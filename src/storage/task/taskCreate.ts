/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ITask } from '../../screens/Home'
import { TASK_COLLECTION } from '../storageConfig'
import { fetchTasks } from './fetchTasks'

export async function taskCreate(task: ITask) {
  try {
    const storedTasks = await fetchTasks()
    const storage = JSON.stringify([...storedTasks, task])
    await AsyncStorage.setItem(TASK_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
