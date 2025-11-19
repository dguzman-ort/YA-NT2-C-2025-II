import AsyncStorage from '@react-native-async-storage/async-storage'

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (error) {
    console.error('Error al guardar los datos', error)
  }
}

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (error) {
    console.error('Error al obtener los datos', error)
  }
}

const clearData = async () => {
  try {
    await AsyncStorage.clear()
  } catch (error) {
    console.error('Error al eliminar los datos', error)
  }
}

export default { 
  storeData, 
  getData,
  clearData
}