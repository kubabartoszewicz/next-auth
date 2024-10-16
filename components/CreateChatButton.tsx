'use client'

import React from 'react'
import { MessageSquarePlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from './ui/button'

const CreateChatButton = () => {
	const router = useRouter()

	const createNewChat = async () => {
		router.push('/chat/abc')
	}

	return (
		<Button onClick={createNewChat} variant='ghost'>
			<MessageSquarePlusIcon />
		</Button>
	)
}

export default CreateChatButton
