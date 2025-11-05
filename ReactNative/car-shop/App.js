// import 'react-native-gesture-handler';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Constants from 'expo-constants'


/** Importaciones de React Navigation */
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Home from './screens/Home'
import VehiculoForm from './screens/Form'

console.log(Constants.statusBarHeight)

export default function App() {

  
  const [showForm, setShowForm] = useState(false)

  const Stack = createNativeStackNavigator()

  return (
    <SafeAreaView style={styles.container}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Listado de vehiculos' }} />
          <Stack.Screen name="Form" component={VehiculoForm} options={{title: 'Agregar vehiculo'}} />
        </Stack.Navigator>
      </NavigationContainer>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
  },
})


