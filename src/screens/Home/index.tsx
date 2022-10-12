import { useState } from 'react'
import { Alert, FlatList, Text, TextInput, View } from 'react-native'
import { Button } from '../../components/Button'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  function handleParticipantAdd() {
    if (!inputValue) {
      Alert.alert('Campo inválido', 'Informe um nome válido')
      return
    }

    const invalidName = participants.some(
      (participant) => participant.toUpperCase() === inputValue.toUpperCase(),
    )

    if (invalidName) {
      Alert.alert(
        'Participante existe',
        `${inputValue} já foi cadastrado na nossa lista`,
      )
      return
    }

    setParticipants((prevState) => [...prevState, inputValue])
    setInputValue('')
  }

  function handleParticipantDelete(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${inputValue}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name),
          )
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          value={inputValue}
          onChangeText={setInputValue}
        />

        <Button title="+" onPress={handleParticipantAdd} />
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onDelete={() => handleParticipantDelete(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes na sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
