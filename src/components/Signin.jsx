'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Signin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [inputHasFocusUsername, setInputHasFocusUsername] = useState()
  const [inputHasFocusPassword, setInputHasFocusPassword] = useState()
  const handleLogin = async () => {
    try {

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full flex justify-center items-center h-screen'>
      <div className='w-[50%] flex flex-col justify-center items-center h-screen'>
        <h1 className='font-bold text-6xl my-16'>Quiz<span className='text-yellow-300'>zer</span></h1>
        <p className='opacity-60 my-2'>Welcome Back!</p>
        <p className='opacity-60 mb-10'>Please Login/Signup to your account</p>
        <form className='flex flex-col w-[390px]' onSubmit={handleLogin}>
          <div className={`flex flex-col border border-gray-300 ${inputHasFocusUsername ? 'border-l-yellow-300 border-l-4' : null}`}>
            <label className={`${inputHasFocusUsername ? 'pl-[9px]' : 'pl-[12px]'} opacity-70 text-sm pt-1`} htmlFor="username">Username </label>
            <input className='focus:outline-none pl-3 text-yellow-400'
              id='username'
              type="text"
              onFocus={() => setInputHasFocusUsername(true)} // Ketika elemen input mendapatkan fokus
              onBlur={() => setInputHasFocusUsername(false)}
            />
          </div>
          <div className={`border-t-0 flex flex-col border border-gray-300 ${inputHasFocusPassword ? 'border-l-yellow-300 border-l-4' : null}`}>
            <label className={`${inputHasFocusPassword ? 'pl-[9px]' : 'pl-[12px]'} opacity-70 text-sm pt-1`} htmlFor="password">Password </label>
            <input className='focus:outline-none pl-3 text-yellow-400'
              id='password'
              type="password"
              onFocus={() => setInputHasFocusPassword(true)} // Ketika elemen input mendapatkan fokus
              onBlur={() => setInputHasFocusPassword(false)}
            />
          </div>
          <div className='flex justify-start gap-x-10 mt-5'>
            <button className='border-yellow-400 max-w-[150px] text-white font-semibold bg-yellow-400 border py-[10px] px-7 mt-6 shadow-yellow-600 shadow-2xl'>Login</button>
            <button className='border-yellow-400 max-w-[150px] text-yellow-400 font-semibold border py-[10px] px-7 mt-6 shadow-yellow-600 shadow-2xl'>SignUp</button>
          </div>
        </form>
      </div>
      <div className='w-[50%] flex justify-center items-center bg-slate-100 h-screen'>
        <Image src={'/handsGraduate.png'} width={450} height={400} />
      </div>
    </div>
  )
}

export default Signin