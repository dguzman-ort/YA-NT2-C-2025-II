import { View, ScrollView } from 'react-native'
import Vehiculo from '../Vehiculo'

export default function VehiculoScrollView({ vehiculos }) {
  return (
    <ScrollView>
      {
        vehiculos.map((vehiculo) => (
          <Vehiculo key={vehiculo.id} vehiculo={vehiculo} />
        ))
      }

    </ScrollView>
  )
}