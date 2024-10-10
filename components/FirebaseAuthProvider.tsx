'use client'

import React, { ReactNode, useEffect } from 'react'
import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'

import { auth } from '@/firebase'
import { signInWithCustomToken } from 'firebase/auth'

export const syncFirebaseAuth = async (session: Session) => {
	if (session && session.firebaseToken) {
		try {
			await signInWithCustomToken(auth, session.firebaseToken)
		} catch (error) {
			console.error('Error signing in with custom token', error)
		}
	} else {
		auth.signOut()
	}
}

const FirebaseAuthProvider = ({ children }: { children: ReactNode }) => {
	const { data: session } = useSession()

	useEffect(() => {
		if (!session) return

		syncFirebaseAuth(session)
	}, [session])

	return <>{children}</>
}

export default FirebaseAuthProvider
