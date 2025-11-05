import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { agregarVehiculo } from '../../services/vehiculos'
import { Input } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'

export default function VehiculoForm() {

  const navigation = useNavigation()
  const [vehiculo, setVehiculo] = useState({
    marca: '',
    modelo: '',
    year: '',
    color: '',
    precio: '',
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
    if (vehiculo.marca === '' || vehiculo.modelo === '' || vehiculo.year === '' || vehiculo.color === '' || vehiculo.precio === '') {
      setErrors({ 
        ...errors, 
        marca: vehiculo.marca === '',
        modelo: vehiculo.modelo === '',
        year: vehiculo.year === '',
        color: vehiculo.color === '',
        precio: vehiculo.precio === ''
      })
      return
    }
    console.log('Guardando vehiculo...')
    agregarVehiculo(vehiculo).then((data) => {
      console.log('Vehiculo guardado', data)
      navigation.goBack()
      setGeneralMessage({
        message: 'Vehiculo guardado correctamente',
        type: 'success',
      })
    })
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
          name="year" 
          placeholder="Año" 
          value={vehiculo.year} 
          onChangeText={(text) => handleChange('year', text)} 
          keyboardType='numeric'
          errorMessage={errors?.year ? 'El año es requerido' : ''}
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
          value={vehiculo.precio} 
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