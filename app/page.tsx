import Link from 'next/link'

export default function Home() {
    return (
        <main className={'flex flex-1 justify-center'}>
            <div
                className={
                    'container text-white flex flex-1 flex-col justify-center items-center gap-12'
                }
            >
                <h1 className={'text-6xl'}>Start Exploring</h1>
                <Link href={'/explore'}>
                    <p className={'text-2xl px-12 py-4 bg-[#F2F99C] text-black rounded-xl'}>
                        Explore
                    </p>
                </Link>
            </div>
        </main>
    )
}
