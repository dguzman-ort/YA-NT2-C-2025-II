import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { vibrate, vibrateLong } from './utils';

import { CronometroProvider } from './components/hooks/useCronometro';
import Cronometro from './components/Cronometro';
import Control from './components/Control';

export default function App() {
  // const { isWorking } = useCronometro();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CronometroProvider>
        <Cronometro />
        <Control />
      </CronometroProvider>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
