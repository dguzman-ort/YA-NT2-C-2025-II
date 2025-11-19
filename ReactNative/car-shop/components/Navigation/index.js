import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../../hooks/useAuth';

import { Home, VehiculoForm, Details, Login } from '../../screens';

const Stack = createNativeStackNavigator()

export default function Navigation() {
  const { auth } = useAuth()  
  console.log('auth', auth)
  return (
    <Stack.Navigator>
        {
          auth ? (
            <>
              <Stack.Screen name="Home" component={Home} options={{ title: 'Listado de vehiculos' }} />
              <Stack.Screen name="Form" component={VehiculoForm} options={{title: 'Agregar vehiculo'}} />
              <Stack.Screen name="Details" component={Details} options={{title: 'Detalle del vehiculo'}} />
            </>
          ) : (
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          )
        }
        {/* <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Listado de vehiculos' }} />
        <Stack.Screen name="Form" component={VehiculoForm} options={{title: 'Agregar vehiculo'}} />
        <Stack.Screen name="Details" component={Details} options={{title: 'Detalle del vehiculo'}} /> */}
      </Stack.Navigator>
  )
}