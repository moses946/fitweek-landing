import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import firebaseConfig from "@/firebase-config.json"

function isConfigured(config: FirebaseOptions) {
  return Boolean(config.apiKey && config.projectId)
}

function getFirebaseApp() {
  if (!isConfigured(firebaseConfig)) {
    return null
  }
  return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
}

const app = getFirebaseApp()
export const db = app ? getFirestore(app) : null
