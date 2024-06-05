'use client'

import Image from 'next/image'
import testImage from '@/public/images/test.jpg'
import likeIcon from '@/public/images/like.png'
import skipIcon from '@/public/images/skip.png'

const Card = () => {
    return (
        <div className="overflow-hidden border-2 border-[#F2F99C] rounded-2xl flex flex-col max-w-[600px] w-full text-white min-h-[300px] items-center relative">
            <div className={'z-10 absolute left-8 top-8 bg-black bg-opacity-30 p-6 rounded-lg'}>
                Name, Age
            </div>
            <div className={'max-w-[250]'}>
                <Image src={testImage} alt={'Card Image'} objectFit={'contain'} quality={100} />
            </div>
            <div
                className={
                    'z-10 absolute bottom-0 bg-black bg-opacity-25 w-full h-40 flex justify-between items-center px-14'
                }
            >
                <div className={'bg-white p-3 rounded-full h-20 w-20'}>
                    <button onClick={() => alert('skipped')}>
                        <Image src={skipIcon} alt={'skip button'} />
                    </button>
                </div>
                <div>
                    <p>Info About</p>
                </div>
                <div className={'bg-white p-3 rounded-full h-20 w-20'}>
                    <button onClick={() => alert('liked')}>
                        <Image src={likeIcon} alt={'like button'} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
