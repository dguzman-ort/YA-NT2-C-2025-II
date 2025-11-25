const AUTH_KEY = '@auth'

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    // Llamada a la API de autenticación
    // ESTO ES UNA MOCKUP PARA PROBAR LA AUTENTICACIÓN
    
    setTimeout(() => {
      const shouldLogin = email.trim().toLowerCase() === 'admin' && password.trim() === '123456'
      if (shouldLogin) {
        resolve({
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30',
          expires_in: 3600,
          user: {
            id: 1,
            fullName: 'Juan Perez',
            email: 'admin@admin.com',
            role: 'admin',
            permissions: ['read', 'write', 'delete']
          }
        })
      } else {
        reject(new Error('Credenciales incorrectas'))
      }
    }, 1000)
    
  })
}



/**
 * Login service with backend API
 */

// const login = (email, password) => {
//   return new Promise((resolve, reject) => {
//     fetch(`${URL_API}/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email, password })
//     })
//       .then(response => {
//         if (response.ok) {
//           return response.json()
//         } else {
//           throw new Error('Error al iniciar sesión')
//         }
//       })
//       .then(data => {
//         resolve(data)
//       })
//       .catch(error => {
//         console.error('Error', error)
//         reject(error)
//       })
//   })
// }

export default { login, AUTH_KEY }