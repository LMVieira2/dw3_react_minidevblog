import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC_NI83BLLGwXF36w7_piLmmNSIpOXEoTw",
    authDomain: "minidevbloghugo.firebaseapp.com",
    projectId: "minidevbloghugo",
    storageBucket: "minidevbloghugo.appspot.com",
    messagingSenderId: "1089709806269",
    appId: "1:1089709806269:web:9b6cabf3edb584dff69dd4",
    measurementId: "G-33WMG6HY47"
  }

  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
  const db = getFirestore(app)

  export {db}