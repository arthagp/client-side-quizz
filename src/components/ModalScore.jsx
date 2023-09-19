import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ModalScore = ({score, closeModal}) => {
    return (
        <div className='fixed left-0 top-0 flex justify-center items-center backdrop-blur-sm backdrop-opacity-90 w-screen h-screen '>
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[70vh] border-t-2 border-yellow-400 rounded-sm'>
                <div className='bg-white rounded-lg shadow-lg h-full flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={'/score.png'} width={430} height={400} alt='score'/>
                        <div className='fixed font-bold text-5xl text-white flex flex-col justify-center items-center'>
                        <h1 className='m-3'>Total Score</h1>
                        <h2 className='m-3'>{score}</h2>
                        </div>
                    </div>
                    <div className='bg-yellow-100 px-6 py-4 flex justify-end bottom-0 fixed w-full'>
                        <Link onClick={closeModal} className='bg-black hover:bg-yellow-400 text-white font-semibold py-2 px-4' href={'/'}>
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalScore