import { useEffect } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { Card, Icon } from '@rneui/themed'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// const IMAGE_URL = 'https://img.freepik.com/vector-gratis/modern-urban-adventure-suv-vehicle-illustration_1344-200.jpg'

const Vehiculo = ({ vehiculo }) => {
  const navigation = useNavigation()


  // useEffect(() => {
  //   console.log("Alta de vehiculo", vehiculo.id)
  //   return () => {
  //     console.log("Baja de vehiculo", vehiculo.id)
  //   }
  // }, [vehiculo])
  return (
    <View>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Details', { id: vehiculo.id })}
      onLongPress={() => console.log('long press')}
      // activeOpacity={0.8}
      >
        <Card containerStyle={{ borderRadius: 10 }}>
          <View style={styles.header}>
            <Image
              source={{ uri: vehiculo.imagen }}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
            <View style={styles.carInfoContainer}>
              <Text style={styles.carInfo}>{vehiculo.marca} {vehiculo.modelo}</Text>
              <Text style={styles.carYear}>{vehiculo.year}</Text>
              <Text style={styles.carPrice}>{vehiculo.precio},00 ARS/Dia</Text>
            </View>

          </View>
          <Card.Divider />
          <View style={styles.buttonContainer}>
            {/* Validar Icon vector */}
            {/* <Icon
              name='favorite'
              type='font-awesome'
              color='#f50'
              onPress={() => console.log('hello')} /> */}
            
            <Button title="Editar" onPress={() => console.log('editar')} />
            <Button title="Eliminar" onPress={() => console.log('eliminar')} />
          </View>
        </Card>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
  },
  carInfoContainer: {
    flex: 1,
    gap: 8
  },
  carInfo: {
    fontSize: 20,
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})

export default Vehiculo