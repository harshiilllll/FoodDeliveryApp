import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginAndRegister/LoginScreen';
import WelcomeScreen from './src/screens/LoginAndRegister/WelcomeScreen';

export default function App() {
  return (
    <WelcomeScreen />
    // <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
