import { Text, View } from 'react-native'
import { styles } from './styles'

type Props = {
  textColor: string
  text: string
  number: number
}

export function CircularCounter({ textColor, text, number }: Props) {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.counterText, color: textColor }}>{text}</Text>
      <View style={styles.circle}>
        <Text style={styles.counterNumber}>{number}</Text>
      </View>
    </View>
  )
}
