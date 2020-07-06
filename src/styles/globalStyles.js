import { StyleSheet } from 'react-native'
import { DefaultTheme } from 'react-native-paper'

export const colors = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4446AD',
    text: '#0C0D25',
    input: '#F9F9F9',
    buttonText: '#FFFFFF',
    background: '#FFFFFF',
    altBackground: '#EAEAEA',
    accent: '#DFE0FF',
  },
}.colors

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center'
  },
  header: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 32,
    color: colors.text,
  }, 
  largeText: {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 28,
    color: colors.text,
  },
  mediumText: {
    fontSize: 18,
    lineHeight: 28,
    color: colors.text,
  },
  smallText: {
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 28,
    color: colors.text,
    alignSelf: 'center',
  },
  buttonStyle: {
    elevation: 4,
    alignSelf: 'center',
    margin: 10,
    marginBottom: 5,
    padding: 20,
    width: 310,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    marginHorizontal: -30,
    backgroundColor: colors.placeholderBackground,
  },
  modal: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    margin: 30,
    elevation: 5,
  },
  settingList: {
    paddingLeft: 25,
    backgroundColor: colors.altBackground,
    paddingVertical: 7,
  },

})

