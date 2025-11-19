import { useState, useEffect, useCallback } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native'
import { getVehiculoById } from '../../services/vehiculos'
import { Divider } from '@rneui/themed'
import { eliminarVehiculo } from '../../services/vehiculos'
import { useAuth } from '../../hooks/useAuth'

export default function Details() {
  const { id } = useRoute().params
  const { auth } = useAuth()
  const [vehiculo, setVehiculo] = useState(null)
  const navigation = useNavigation()

  
  useFocusEffect(useCallback(() => {
    if (id) {
      getVehiculoById(id, auth.access_token).then((vehiculo) => {
        console.log('Vehiculo obtenido', vehiculo)
        setVehiculo(vehiculo)
      }).catch((error) => {
        console.log('Error al obtener el vehiculo', error)
      })
    }
  }, [id]))

  const handleEliminar = () => {
    eliminarVehiculo(id, auth.access_token).then((data) => {
      console.log('Vehiculo eliminado', data)
      navigation.goBack()
    }).catch((error) => {
      console.log('Error al eliminar el vehiculo', error)
    })
  }



  return (
    <View style={styles.container}>
      {vehiculo && (
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: vehiculo.urlImagen }}
              style={{ width: 260, height: 320 }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{vehiculo.marca} {vehiculo.modelo}</Text>
            <Text style={styles.carYear}>{vehiculo.anio}</Text>
            <Text style={styles.carPrice}>{vehiculo.precio},00 ARS/Dia</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Descripción</Text>
            <Text style={styles.descriptionText}>{vehiculo.descripcion || 'Sin descripción'}</Text>
          </View>
          <Divider style={{ marginVertical: 20 }} />
          <View style={styles.buttonContainer}>
            <Button title="Editar" onPress={() => navigation.navigate('Form', { vehiculoData: vehiculo })} />
            <Button title="Eliminar" onPress={handleEliminar} />
          </View>

        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  carYear: {
    fontSize: 16,
    color: 'gray',
  },
  carPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0099CC',
    paddingTop: 20,
  },
  descriptionContainer: {
    paddingTop: 30,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    paddingTop: 20,
  },
})