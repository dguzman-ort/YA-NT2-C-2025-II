import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed'
import { Divider } from '@rneui/themed'
import VehiculoFlatList from '../../components/VehiculoFlatList'
import { StatusBar } from 'expo-status-bar'
import { FAB } from '@rneui/themed'
import { getVehiculos } from '../../services/vehiculos'
import { useState, useEffect, useCallback } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import { useAuth } from '../../hooks/useAuth'

export default function Home() {
  const { auth, logout } = useAuth()

  const [vehiculos, setVehiculos] = useState([])
  const [showForm, setShowForm] = useState(false)

  const navigation = useNavigation()


  useFocusEffect(useCallback(() => {
    getVehiculos(auth.access_token).then((vehiculos) => {
      // console.log('Vehiculos obtenidos', vehiculos)
      setVehiculos(vehiculos)
    })
  }, []))
  
  
  // useEffect(() => {
  //   getVehiculos().then((vehiculos) => {
  //     console.log(vehiculos)
  //     setVehiculos(vehiculos)
  //   })
  // }, [])

  return (
    <>
      <View style={styles.header}>
        {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Listado de vehiculos</Text> */}
        <View style={styles.userContainer}>
          <Text style={styles.userText}>Hola, {auth.user.fullName}</Text>
        </View>
        <TouchableOpacity onPress={logout}>
          <View style={styles.iconContainer}>
            <FontAwesome name="sign-out" size={20} color="black" />
          </View>
        </TouchableOpacity>

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
    justifyContent: 'space-between',
    gap: 10,
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});