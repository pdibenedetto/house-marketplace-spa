import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYTosu8dwmAygIbPysFDeP72jZaVtdz6Y',
  authDomain: 'house-marketplace-spa.firebaseapp.com',
  projectId: 'house-marketplace-spa',
  storageBucket: 'house-marketplace-spa.appspot.com',
  messagingSenderId: '216732331737',
  appId: '1:216732331737:web:3a1218e401faad5b4818c8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
