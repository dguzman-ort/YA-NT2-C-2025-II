import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB, Divider } from '@rneui/themed';
import { getVehiculos } from './services/vehiculos'
import VehiculoScrollView from './components/VehiculoScrollView'
import VehiculoFlatList from './components/VehiculoFlatList'
import { SafeAreaView } from 'react-native-safe-area-context'
import VehiculoForm from './components/vehiculoForm'
import Constants from 'expo-constants'
import { Icon } from '@rneui/base';

console.log(Constants.statusBarHeight)

export default function App() {

  const [vehiculos, setVehiculos] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    getVehiculos().then((vehiculos) => {
      console.log(vehiculos)
      setVehiculos(vehiculos)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {/* <Vehiculo /> */}

      {
        showForm ? <VehiculoForm /> : (
          <>
            <View style={styles.header}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Listado de vehiculos</Text>
              <View style={{ flexDirection: 'row', alignItems: 'right', justifyContent: 'flex-end', gap: 10 }}>
                <Icon name="search" type="font-awesome" color="black" />
                <Icon name="filter" type="font-awesome" color="black" />
              </View>

            </View>
            <Divider />

            {/* Listado de vehiculos usando ScrollView */}
            {/* <VehiculoScrollView vehiculos={vehiculos} /> */}

            {/* Listado de vehiculos usando FlatList */}
            <VehiculoFlatList vehiculos={vehiculos} />

            <StatusBar style="auto" />
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <FAB
                icon={{
                  name: 'add',
                  type: 'font-awesome',
                  color: 'white'
                }}
                placement="bottomRight"
                color="#0099CC"
                onPress={() => setShowForm(true)}
              />
            </View>
          </>
        )
      }



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7f8',
    // alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  }
});
