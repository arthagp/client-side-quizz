'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

const Navbar = () => {
    const [isLogged, setIsLogged] = useState(false)

    const token = Cookies.get('token')

    useEffect(() => {
        if (token) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [])

    const handleLogout = () => {
        const values = ['username', 'id', 'token']
        values.forEach(value => Cookies.remove(value))
    }

    return (
        <div className='flex justify-between items-center m-8 px-6 border-b pb-8'>
            <h1 className='font-bold text-3xl'>Quiz<span className='text-yellow-300'>zer</span></h1>
            <ul className='flex justify-center gap-x-10 items-center'>
                <li>
                    <Link className='opacity-50 hover:opacity-80' href={'/'}>Home</Link>
                </li>
                {
                    isLogged && (
                        <li>
                            <Link className='opacity-50 hover:opacity-80' href={'/my-quizz'}>My Quizz</Link>
                        </li>
                    )
                }
                <li>
                    <Link className='opacity-50 hover:opacity-80' href={'#'}>About us</Link>
                </li>
                <li>
                    {isLogged ? (
                        <Link onClick={handleLogout} className='hover:bg-yellow-400 hover:text-white border border-yellow-400 text-yellow-500 px-4 py-[4px]' href={'/login'}>Logout</Link>
                    ) : (
                        <Link className='hover:bg-yellow-400 hover:text-white border border-yellow-400 text-yellow-500 px-4 py-[4px]' href={'/login'}>Login</Link>
                    )}
                </li>

            </ul>
        </div >
    )
}

export default Navbar