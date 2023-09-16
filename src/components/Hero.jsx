'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import ModalQuizz from './ModalQuizz'

const Hero = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }



  return (
    <div className='flex justify-between items-center gap-x-40'>
      <div className='flex flex-col gap-y-7'>
        <h1 className='text-6xl max-w-[400px]'>Quiz<span className='text-yellow-400'>zer</span> make you feel smarter</h1>
        <p className='border-l border-black pl-4 mt-4 opacity-60'>We can help you become smarter as soon as possible.</p>
        <button onClick={handleShowModal} className='border-yellow-400 max-w-[150px] text-white font-semibold bg-yellow-400 border py-1 px-3 mt-6 shadow-yellow-600 shadow-2xl'>Start Quizz</button>
      </div>
      <Image src={'/heroes.png'} width={450} height={400} alt='heroesImg' />
      {showModal && (
        <ModalQuizz handleCloseBtn={handleCloseModal}/>
      )}
    </div>
  )
}

export default Hero