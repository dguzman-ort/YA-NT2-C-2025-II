import { View, Button } from 'react-native';
import styles from './styles';
import { useCronometro } from '../hooks/useCronometro';
export default () => {
  const { isRunning, setIsRunning } = useCronometro();


  return (
    <View style={styles.buttonContainer}>
      <Button title={isRunning ? 'Pausar' : 'Iniciar'} onPress={() => setIsRunning(!isRunning)} />
      {/* <Button title="Iniciar"  /> */}
      <Button title="Reiniciar" />
    </View>
  )
}