import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1A1A1A',
  },
  header: {
    backgroundColor: '#0D0D0D',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    top: -48,
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#0D0D0D',
    padding: 12,
    fontSize: 16,
    color: '#FFF',
  },
  inputFocused: {
    flex: 1,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#5E60CE',
    padding: 12,
    fontSize: 16,
    color: '#FFF',
  },
  button: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginLeft: 6,
  },
  counters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  listEmpty: {
    width: '100%',
    borderTopColor: '#333333',
    borderTopWidth: 1,
    marginTop: 20,
    alignItems: 'center',
    paddingTop: 60,
  },
  listEmptyTitle: {
    fontWeight: 'bold',
    color: '#808080',
    marginTop: 20,
  },
  listEmptyDescription: {
    color: '#808080',
  },
})
