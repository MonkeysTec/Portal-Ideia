import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import { AuthProvider }from './src/Context/AuthProvider/LoginContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Montserrat_600SemiBold,Montserrat_500Medium,Montserrat_800ExtraBold} from '@expo-google-fonts/montserrat';



export default function App() {
const [loaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_800ExtraBold
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer style={styles}>
      <SafeAreaProvider>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </SafeAreaProvider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:Platform.OS==='ios'?20:10
  },
});
