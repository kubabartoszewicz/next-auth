import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import LogoImage from '@logos/logo.svg'
import { AspectRatio } from './ui/aspect-ratio'

const Logo = () => {
	return (
		<Link href='/' className='overflow-hidden' prefetch={false}>
			<div className='flex items-center w-72 h-14'>
				<AspectRatio ratio={16 / 9} className='flex items-center justify-center'>
					<Image priority src={LogoImage} alt='Logo' width={60} height={60} />
				</AspectRatio>
			</div>
		</Link>
	)
}
export default Logo
