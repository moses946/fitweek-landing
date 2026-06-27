import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { FirebaseError } from "firebase/app"
import { db } from "./firebase"

export type WaitlistResult =
  | { ok: true; alreadyJoined: boolean }
  | { ok: false; error: string }

function emailToDocId(email: string) {
  return encodeURIComponent(email)
}

export async function joinWaitlist(email: string): Promise<WaitlistResult> {
  if (!db) {
    return { ok: false, error: "Waitlist is not configured yet. Please try again later." }
  }

  const normalizedEmail = email.trim().toLowerCase()

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return { ok: false, error: "Please enter a valid email address." }
  }

  try {
    const docRef = doc(db, "waitlist", emailToDocId(normalizedEmail))

    await setDoc(docRef, {
      email: normalizedEmail,
      createdAt: serverTimestamp(),
    })

    return { ok: true, alreadyJoined: false }
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === "permission-denied") {
        return { ok: true, alreadyJoined: true }
      }

      if (error.code === "unavailable") {
        return { ok: false, error: "Could not reach the server. Please try again." }
      }
    }

    console.error("Waitlist signup failed:", error)
    return { ok: false, error: "Something went wrong. Please try again." }
  }
}
