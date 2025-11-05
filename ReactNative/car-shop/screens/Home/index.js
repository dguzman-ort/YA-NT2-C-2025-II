import { View, Text, StyleSheet } from 'react-native'
import { Icon } from '@rneui/themed'
import { Divider } from '@rneui/themed'
import VehiculoFlatList from '../../components/VehiculoFlatList'
import { StatusBar } from 'expo-status-bar'
import { FAB } from '@rneui/themed'
import { getVehiculos } from '../../services/vehiculos'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {

  const [vehiculos, setVehiculos] = useState([])
  const [showForm, setShowForm] = useState(false)

  const navigation = useNavigation()

  useEffect(() => {
    getVehiculos().then((vehiculos) => {
      console.log(vehiculos)
      setVehiculos(vehiculos)
    })
  }, [])

  return (
    <>
      <View style={styles.header}>
        {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Listado de vehiculos</Text> */}
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
          onPress={() => navigation.navigate('Form')}
        />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  }
});