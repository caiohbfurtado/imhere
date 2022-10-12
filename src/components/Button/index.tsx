import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './styles'

type ButtonProps = {
  title: string | '+' | '-'
} & TouchableOpacityProps

export function Button({ title, ...rest }: ButtonProps) {
  const typeButton = title === '+' ? 'positiveButton' : 'negativeButton'

  return (
    <TouchableOpacity style={styles[typeButton]} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
