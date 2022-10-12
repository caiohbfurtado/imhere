import { StyleSheet, ViewStyle } from 'react-native'

const buttonStyles: ViewStyle = {
  width: 56,
  height: 56,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
}

export const styles = StyleSheet.create({
  positiveButton: {
    ...buttonStyles,
    backgroundColor: '#31cf67',
  },
  negativeButton: {
    ...buttonStyles,
    backgroundColor: '#e23c44',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
})
