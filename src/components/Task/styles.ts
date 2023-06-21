import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 15,
    borderRadius: 50,
    borderColor: '#4EA8DE',
  },
  description: {
    color: '#FFF',
    flex: 1,
  },
  checkedDescription: {
    color: '#808080',
    flex: 1,
    textDecorationLine: 'line-through',
  },
  trashIcon: {
    margin: 10,
    width: 40,
  },
})
