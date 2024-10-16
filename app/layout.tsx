import type { Metadata } from 'next'

import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import ClientProviders from '@/components/ClientProviders'
import FirebaseAuthProvider from '@/components/FirebaseAuthProvider'

export const metadata: Metadata = {
	title: 'Next Auth',
	description: 'Next Auth',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClientProviders>
			<html lang='en'>
				<body className='flex flex-col min-h-screen'>
					<FirebaseAuthProvider>
						<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
							<Header />
							{children}
						</ThemeProvider>
					</FirebaseAuthProvider>
				</body>
			</html>
		</ClientProviders>
	)
}
