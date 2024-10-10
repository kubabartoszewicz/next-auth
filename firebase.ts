// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import { getAuth } from 'firebase/auth'
import { getFunctions } from 'firebase/functions'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyATRqG8_t2yGJQFYLfbRGKwRe8x9zBFXfg',
	authDomain: 'nextauth-1f8a7.firebaseapp.com',
	projectId: 'nextauth-1f8a7',
	storageBucket: 'nextauth-1f8a7.appspot.com',
	messagingSenderId: '514830221368',
	appId: '1:514830221368:web:8dae3811a82a48e08326cd',
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore(app)
const functions = getFunctions(app)

export { db, auth, functions }
