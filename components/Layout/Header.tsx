import Image from 'next/image'
import logoImage from '@/public/logo.svg'
import profileImage from '@/public/profile.svg'
import Link from 'next/link'
import { Navigation } from '@/components/Layout/Navigation'
import { CustomInput } from '../CustomInput'

export const Header = () => {
    return (
        <>
            <header className={'bg-black flex item-center justify-center p-4'}>
                <div className={'container flex items-center justify-between'}>
                    <Link href={'#'}>
                        <Image src={logoImage} alt={'logo image'} quality={100} height={40} />
                    </Link>
                    <Navigation />
                    <Link href={'#'}>
                        <Image src={profileImage} alt={'profile image'} quality={100} />
                    </Link>
                </div>
            </header>
            <CustomInput type="text" placeholder="User" />
        </>
    )
}
