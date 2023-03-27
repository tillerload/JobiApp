import jobsData from "./jobsData"
import firebase from './firebase'
import { useEffect, useState } from 'react'

const SillyFirebasePush = () => {

  const [dataTest, setDataTest] = useState([])

  useEffect(() => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)

  }, [])

  return(
d
  )
}

export default SillyFirebasePush;