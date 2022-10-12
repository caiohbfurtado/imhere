import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '../Button'

import { styles } from './styles'

type ParticipantProps = {
  name: string
  onDelete: () => void
}

export function Participant({ name, onDelete }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Button title="-" onPress={onDelete} />
    </View>
  )
}
