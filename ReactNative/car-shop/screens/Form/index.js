import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { agregarVehiculo, actualizarVehiculo } from '../../services/vehiculos'
import { Input } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native'
import { useAuth } from '../../hooks/useAuth'

export default function VehiculoForm() {

  const { vehiculoData } = useRoute().params || {}
  const { auth } = useAuth()
  const navigation = useNavigation()
  const [vehiculo, setVehiculo] = useState({
    marca: vehiculoData?.marca || '',
    modelo: vehiculoData?.modelo || '',
    anio: vehiculoData?.anio || '',
    color: vehiculoData?.color || '',
    precio: vehiculoData?.precio || '',
  })

  const [generalMessage, setGeneralMessage] = useState(null)

  const [errors, setErrors] = useState(null)

  const handleChange = (name, value) => {
    setVehiculo({ ...vehiculo, [name]: value })
    setErrors({ ...errors, [name]: null })
  }

  const handleSubmit = () => {
    console.log(vehiculo)
    /* Validaciones */
    if (vehiculo.marca === '' || vehiculo.modelo === '' || vehiculo.anio === '' || vehiculo.color === '' || vehiculo.precio === '') {
      setErrors({ 
        ...errors, 
        marca: vehiculo.marca === '',
        modelo: vehiculo.modelo === '',
        anio: vehiculo.anio === '',
        color: vehiculo.color === '',
        precio: vehiculo.precio === ''
      })
      return
    }
    

    const shouldUpdate = vehiculoData?.id ? true : false

    if (shouldUpdate){
      /* Actualizar vehiculo */
      console.log('Actualizando vehiculo...', vehiculoData.id, vehiculo)
      actualizarVehiculo(vehiculoData.id, vehiculo, auth.access_token).then((data) => {
        console.log('Vehiculo actualizado', data)
        navigation.goBack()
        setGeneralMessage({
          message: 'Vehiculo actualizado correctamente',
          type: 'success',
        })
      })
    }else{
      /* Agregar vehiculo */
      console.log('Agregando vehiculo...', vehiculo)
      agregarVehiculo(vehiculo, auth.access_token).then((data) => {
        console.log('Vehiculo guardado', data)
        navigation.goBack()
        setGeneralMessage({
          message: 'Vehiculo guardado correctamente',
          type: 'success',
        })
      })
    }

    
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Agregar vehiculo</Text>
      </View>
      <View style={styles.formContainer}>
        <Input 
          name="marca" 
          placeholder="Marca" 
          value={vehiculo.marca} 
          onChangeText={(text) => handleChange('marca', text)} 
          keyboardType='default'
          errorMessage={errors?.marca ? 'La marca es requerida' : ''}
        />
        <Input 
          name="modelo" 
          placeholder="Modelo" 
          value={vehiculo.modelo} 
          onChangeText={(text) => handleChange('modelo', text)} 
          keyboardType='default'
          errorMessage={errors?.modelo ? 'El modelo es requerido' : ''}
        />
        <Input 
          name="anio" 
          placeholder="Año" 
          value={vehiculo.anio.toString()} 
          onChangeText={(text) => handleChange('anio', text)} 
          keyboardType='numeric'
          errorMessage={errors?.anio ? 'El año es requerido' : ''}
        />
        <Input 
          name="color" 
          placeholder="Color" 
          value={vehiculo.color} 
          onChangeText={(text) => handleChange('color', text)} 
          keyboardType='default'
          errorMessage={errors?.color ? 'El color es requerido' : ''}
        />
        <Input 
          name="precio" 
          placeholder="Precio" 
          value={vehiculo.precio.toString()} 
          onChangeText={(text) => handleChange('precio', text)} 
          keyboardType='numeric'
          errorMessage={errors?.precio ? 'El precio es requerido' : ''}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
          <Button title="Guardar" onPress={handleSubmit} />
          <Button title="Cancelar" onPress={() => navigation.goBack()} />
        </View>

        {/* Alerta general */}
        {generalMessage && 
            <View style={[styles.autoGuardadoContainer, generalMessage.type === 'success' ? { backgroundColor: 'green' } : { backgroundColor: 'red' }]}>
              <Text style={{ color: 'white' }}>{generalMessage.message}</Text>
            </View>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1    
  },
  formContainer: {
    flex: 1,
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  autoGuardadoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
  },
})