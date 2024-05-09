import Link from "next/link";

export const Navigation = () => {
    return (
        <nav className={'absolute top-2 left-0 flex justify-center w-full'}>
            <div className={'border-2 rounded-xl'}>
                <ul className={'flex gap-2 p-1 w-full'}>
                    <li className={'rounded-xl p-1 active:bg-white active:text-black'}>
                        <Link href={'#'}>People</Link>
                    </li>
                    <li className={'rounded-xl p-1 active:bg-white active:text-black'}>
                        <Link href={'#'}>Chats</Link>
                    </li>
                    <li className={'rounded-xl p-1 active:bg-white active:text-black'}>
                        <Link href={'#'}>Likes</Link>
                    </li>
                    <li className={'rounded-xl p-1 active:bg-white active:text-black'}>
                        <Link href={'#'}>Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}