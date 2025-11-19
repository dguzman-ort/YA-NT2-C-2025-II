import { createContext, useContext, useState } from "react";

const authData = createContext()

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

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