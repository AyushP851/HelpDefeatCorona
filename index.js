/**
 * @format
 */
import * as React from 'react';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const fontConfig = {
    default: {
      regular: {
        fontFamily: 'System',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'System',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'System',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'System',
        fontWeight: 'normal',
      },
    },
  };
const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
    colors: {
      ...DefaultTheme.colors,
      primary: '#4446AD',
      text: '#0C0D25',
      input: '#F9F9F9',
      buttonText: '#FFFFFF',
      background: '#FFFFFF',
      altBackground: '#F9FAFA',
      accent: '#DFE0FF',
    },
  };

export default function Main() {
    return (
      <PaperProvider theme={ theme }>
        <App />
      </PaperProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
