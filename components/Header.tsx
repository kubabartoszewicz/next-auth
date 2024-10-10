import React from 'react'
import { getServerSession } from 'next-auth'
import { MessageSquareIcon } from 'lucide-react'
import Link from 'next/link'

import Logo from './Logo'
import DarkModeToggle from './DarkModeToggle'
import UserButton from './UserButton'
import { authOptions } from '@/auth'
import CreateChatButton from './CreateChatButton'

async function Header() {
	const session = await getServerSession(authOptions)

	console.log('session', session)

	return (
		<header className='sticky top-0 z-50 bg-gray-900'>
			<nav className='flex flex-col sm:flex-row items-center p-5 pl-2 max-w-7xl mx-auto'>
				<Logo />

				<div className='flex-1 flex items-center justify-end space-x-4'>
					{session ? (
						<>
							<Link href={'/chat'} prefetch={false}>
								<MessageSquareIcon className='text-black dark:text-white' />
							</Link>
							<CreateChatButton />
						</>
					) : (
						<Link href={'/pricing'}>Pricing</Link>
					)}
					<DarkModeToggle />
					<UserButton session={session} />
				</div>
			</nav>
		</header>
	)
}

export default Header
