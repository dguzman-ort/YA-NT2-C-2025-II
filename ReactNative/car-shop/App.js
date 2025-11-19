// import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Constants from 'expo-constants'


/** Importaciones de React Navigation */
import { NavigationContainer } from '@react-navigation/native'

import Navigation from './components/Navigation'
import { AuthProvider } from './hooks/useAuth'

console.log(Constants.statusBarHeight)

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
  },
})


