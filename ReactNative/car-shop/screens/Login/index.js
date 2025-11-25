import { Input } from '@rneui/base'
import { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import authService from '../../services/authService'
import { useAuth } from '../../hooks/useAuth'
import { storeData } from '../../services/AsyncStorage'


export default function Login() {
  const { setAuth } = useAuth()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [message, setMessage] = useState(null)
  

  const handleSubmit = () => {
    console.log('formData', formData)
    authService.login(formData.email, formData.password).then((data) => {
      console.log('Usuario autenticado', data)
      setAuth(data)

    }).catch((error) => {
      console.log('error', error)
      setMessage(error.message)
    })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Input 
          placeholder="Email" 
          keyboardType="email-address" 
          autoCapitalize="none" 
          value={formData.email} 
          onChangeText={(text) => 
          setFormData({ ...formData, email: text })} 
         />
        
        <Input 
          placeholder="Password" 
          keyboardType="visible-password" 
          secureTextEntry={true} 
          value={formData.password} 
          onChangeText={(text) => setFormData({ ...formData, password: text })} 
        />
        <Button title="Iniciar sesión" onPress={handleSubmit} />
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
  message: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
})