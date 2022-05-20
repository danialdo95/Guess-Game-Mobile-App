import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#3b021f', '#ddb52f']} style={styles.rootScreen}>
      <StartGameScreen></StartGameScreen>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1
  }
});
