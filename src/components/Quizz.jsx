import React from 'react'

const Quizz = () => {


    // jika id queztion sedang berada di index maka warna dari list akan menyesuaikan
    return (
        <div className='flex flex-col justify-center items-center gap-y-20'>
            <div>
                <ul className='flex justify-center items-center mx-auto text-center gap-x-12'>
                    <li className='border-8 border-yellow-300 flex justify-center items-center w-8 h-8 text-black bg-white-300 rounded-full p-3'>1</li>
                    <li className='flex border-8 border-gray-300 justify-center items-center w-8 h-8 text-black bg-gray-200 rounded-full p-3'>2</li>
                    <li className='flex border-8 border-gray-300 justify-center items-center w-8 h-8 text-black bg-gray-200 rounded-full p-3'>3</li>
                    <li className='flex border-8 border-gray-300 justify-center items-center w-8 h-8 text-black bg-gray-200 rounded-full p-3'>4</li>
                    <li className='flex border-8 border-gray-300 justify-center items-center w-8 h-8 text-black bg-gray-200 rounded-full p-3'>5</li>
                </ul>
            </div>
            <div className='max-w-[70%] flex justify-center items-center mx-auto bg-yellow-400'>
                <p className='font-semibold text-white text-3xl p-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, placeat vel inventore ducimus ab ipsam corrupti, omnis consequatur expedita at facilis voluptatum enim sed iste deleniti harum eos. Veniam, nemo.</p>
            </div>
            <div className='w-[50%] flex justify-center items-center mx-auto'>
                <input className='border-4 border-yellow-200 w-[50%] h-[50px]' type="text" />
            </div>
            <div className='w-[70%] flex justify-between items-center'>
                <button className='border p-3 bg-gray-300 font-semibold text-black flex justify-center items-center'><span><img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/sort-left.png" alt="sort-left" /></span> Previous</button>
                <button className='border p-3 bg-yellow-300 text-white font-semibold flex justify-center items-center'>Next <span className='ml-2'><img width="24" height="24" src="https://img.icons8.com/material/24/FFFFFF/circled-chevron-right.png" alt="circled-chevron-right"/></span></button>
            </div>
        </div>
    )
}

export default Quizz