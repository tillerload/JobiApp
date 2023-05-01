import jobsData from "./jobsData"
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import firebaseConfig from '../firebase'
import { initializeApp } from "firebase/app"

const SillyFirebasePush = () => {

  const [dataTest, setDataTest] = useState([])

  useEffect(() => {
    initializeApp(firebaseConfig)
    const db = getFirestore()
    const colRef = collection(db, 'books')
    getDocs(colRef)
      .then((snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
          books.push({ ...doc.data(), id: doc.id})
        })
        console.log(books)
      })

  }, [])

  return(
    <div>
      <h1>firebase stuff</h1>
    </div>
  )
}

export default SillyFirebasePush;