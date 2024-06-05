import Image from 'next/image'
import logoImage from '@/public/logo.svg'
import profileImage from '@/public/profile.svg'
import Link from 'next/link'
import { Navigation } from '@/components/Layout/Navigation'

export const Header = () => {
    return (
        <>
            <header className={'bg-black flex item-center justify-center p-4'}>
                <div className={'container flex items-center justify-between'}>
                    <Link href={'#'} className="z-10">
                        <Image src={logoImage} alt={'logo image'} quality={100} height={40} />
                    </Link>
                    <Navigation />
                    <div className="flex items-center gap-4 z-10">
                        <Link href={'/auth/register'}>
                            <p className="text-white">Sign Up</p>
                        </Link>
                        <Link href={'/auth/login'}>
                            <p className="text-white">Login</p>
                        </Link>
                        <Image src={profileImage} alt={'profile image'} quality={100} />
                    </div>
                </div>
            </header>
        </>
    )
}
