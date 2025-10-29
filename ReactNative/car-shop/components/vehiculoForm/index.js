import { View, Text, TextInput, Button } from 'react-native'
import { Input } from '@rneui/themed';

export default function VehiculoForm() {
  return (
    <View>
      <Input name="marca" placeholder="Marca" />
      <Input name="modelo" placeholder="Modelo" />
      <Input name="year" placeholder="Año" />
      <Input name="color" placeholder="Color" />
      <Input name="precio" placeholder="Precio" />
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
        <Button title="Guardar" onPress={() => console.log('Guardar vehiculo')} />
        <Button title="Cancelar" onPress={() => console.log('Cancelar')} />
      </View>

    </View>
  )
}