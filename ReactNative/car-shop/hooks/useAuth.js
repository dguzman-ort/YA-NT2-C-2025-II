import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from '../services/AsyncStorage'
import authService from '../services/authService'

const authData = createContext()

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);


  useEffect(() => {

    AsyncStorage.getData(authService.AUTH_KEY).then((data) => {
      console.log('Datos obtenidos de AsyncStorage', data)
      if (data) {
        setAuth(data)
      }
    })
  }, [])

  useEffect(() => {
    if (auth) {
      console.log('Guardando auth en AsyncStorage', authService.AUTH_KEY)
      AsyncStorage.storeData(authService.AUTH_KEY, auth)
    } else {
      AsyncStorage.clearData()
    }
  }, [auth])

  const logout = () => {
    setAuth(null)
  }


  return (
          <authData.Provider value={{ auth, setAuth, logout }}>
          {children}
          </authData.Provider>
  )
}

export function useAuth() {
  const context = useContext(authData)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}