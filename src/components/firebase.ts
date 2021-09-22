import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const app = initializeApp({
  apiKey: "AIzaSyDZTKUmK7o8JVmLONrXcYg98lxkcItoUb4",
  authDomain: "blog-3dd22.firebaseapp.com",
  databaseURL: "https://blog-3dd22.firebaseio.com",
  projectId: "blog-3dd22",
  storageBucket: "blog-3dd22.appspot.com",
  messagingSenderId: "1019552586171",
  appId: "1:1019552586171:web:8c0ddc1e8252ba17c24c9e",
})
export const database = getDatabase(app)
