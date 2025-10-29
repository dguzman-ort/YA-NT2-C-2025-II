import { FlatList } from 'react-native'
import Vehiculo from '../Vehiculo'

export default function VehiculoFlatList({ vehiculos }) {
  return (
    <FlatList
      data={vehiculos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Vehiculo vehiculo={item} />}
    />
  )
}