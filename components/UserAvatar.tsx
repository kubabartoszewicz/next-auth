import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const UserAvatar = ({
	name,
	image,
	className,
}: {
	name?: string | null
	image?: string | null
	className?: string
}) => {
	return (
		<Avatar className={cn('bg-white text-black', className)}>
			{image && <Image src={image} alt={name || ''} width={40} height={40} className='rounded-full' />}
			<AvatarFallback className='dark:bg-white dark:text-black text-lg'>
				{name
					?.split(' ')
					.map(name => name[0])
					.join(' ')}
			</AvatarFallback>
		</Avatar>
	)
}

export default UserAvatar
