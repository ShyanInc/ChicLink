import Image from "next/image";
import logoImage from '@/public/logo.svg';
import profileImage from '@/public/profile.svg';
import Link from "next/link";
import {Navigation} from "@/components/Layout/Navigation";

export const Header = () => {
    return (
        <div className={'container mx-auto h-[70px] flex items-center justify-between relative'}>
            <Link href={'#'}>
                <Image src={logoImage} alt={'logo image'} quality={100} height={40}/>
            </Link>
            <Navigation/>
            <Link href={'#'}>
                <Image src={profileImage} alt={'profile image'} quality={100}/>
            </Link>
        </div>
    )
}