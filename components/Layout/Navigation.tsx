import Link from 'next/link'

export const Navigation = () => {
    return (
        <nav className={'absolute top-4 left-0 flex justify-center w-full'}>
            <div className={'border-2 border-[#F2F99C] rounded-3xl text-xl'}>
                <ul className={'flex gap-2 px-1 py-1 w-full'}>
                    <li
                        className={
                            'rounded-2xl active:bg-white w-full text-white active:text-black px-2'
                        }
                    >
                        <Link href={'/explore'} className={'align-sub'}>
                            People
                        </Link>
                    </li>
                    <li className={'rounded-2xl active:bg-white text-white active:text-black px-2'}>
                        <Link href={'#'} className={'align-sub'}>
                            Chats
                        </Link>
                    </li>
                    <li className={'rounded-2xl active:bg-white text-white active:text-black px-2'}>
                        <Link href={'#'} className={'align-sub'}>
                            Likes
                        </Link>
                    </li>
                    <li className={'rounded-2xl active:bg-white text-white active:text-black px-2'}>
                        <Link href={'#'} className={'align-sub'}>
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
