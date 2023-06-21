import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import Checkbox from 'expo-checkbox'
import trashIcon from './imgs/trash.png'

type Props = {
  description: string
  isConcluded: boolean
  onDelete: () => void
  onCheck: () => void
}

export function Task({ description, isConcluded, onDelete, onCheck }: Props) {
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isConcluded}
        onValueChange={onCheck}
        color={isConcluded ? '#5E60CE' : undefined}
      />
      <Text
        style={isConcluded ? styles.checkedDescription : styles.description}
      >
        {description}
      </Text>
      <TouchableOpacity onPress={onDelete}>
        <Image style={styles.trashIcon} source={trashIcon} alt="trash" />
      </TouchableOpacity>
    </View>
  )
}
