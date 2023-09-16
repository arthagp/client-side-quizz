'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { userRegister } from '@/api/fetch'
import Link from 'next/link';
import Image from 'next/image';

const Signup = () => {
  const [inputHasFocusUsername, setInputHasFocusUsername] = useState()
  const [inputHasFocusPassword, setInputHasFocusPassword] = useState()
  const [inputHasFocusRePassword, setInputHasFocusRePassword] = useState()

  const handleRegister = async (values) => {
    try {
      await userRegister(values.username, values.password)
      toast.success("Registration successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      window.location.reload()
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      rePassword: '',
    },
    onSubmit: (values) => handleRegister(values),
    validationSchema: yup.object().shape({
      username: yup.string().required('username is required').min(3).max(12),
      password: yup.string().required('Password is required').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        'Password must have at least one uppercase, one lowercase, one number, one special character, and min 8 char'
      ),
      rePassword: yup
        .string()
        .required("Re-enter password is required")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    })
  })

  return (
    <div className='w-full flex justify-center items-center h-screen'>
      <div className='w-[50%] flex flex-col justify-center items-center h-screen'>
        <h1 className='font-bold text-6xl my-16'>Quiz<span className='text-yellow-300'>zer</span></h1>
        <p className='opacity-60 my-2'>Welcome Back!</p>
        <p className='opacity-60 mb-10'>Please Login/Signup to your account</p>
        <form className='flex flex-col w-[390px]' onSubmit={formik.handleSubmit}>
          <div className={`flex flex-col border border-gray-300 ${inputHasFocusUsername ? 'border-l-yellow-300 border-l-4' : null}`}>
            <label className={`${inputHasFocusUsername ? 'pl-[9px]' : 'pl-[12px]'} opacity-70 text-sm pt-1`} htmlFor="username">Username </label>
            <input className='focus:outline-none pl-3 text-yellow-400'
              id='username'
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              onFocus={() => setInputHasFocusUsername(true)}
              onBlur={(e) => {
                setInputHasFocusUsername(false)
                formik.handleBlur(e)
              }}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-400 text-sm ml-3 mb-2">{formik.errors.username}</div>
            )}
          </div>
          <div className={`border-t-0 flex flex-col border border-gray-300 ${inputHasFocusPassword ? 'border-l-yellow-300 border-l-4' : null}`}>
            <label className={`${inputHasFocusPassword ? 'pl-[9px]' : 'pl-[12px]'} opacity-70 text-sm pt-1`} htmlFor="password">Password </label>
            <input className='focus:outline-none pl-3 text-yellow-400'
              id='password'
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onFocus={() => setInputHasFocusPassword(true)}
              onBlur={(e) => {
                setInputHasFocusPassword(false)
                formik.handleBlur(e)
              }}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-400 text-sm ml-3 mb-2">{formik.errors.password}</div>
            )}
          </div>
          <div className={`border-t-0 flex flex-col border border-gray-300 ${inputHasFocusRePassword ? 'border-l-yellow-300 border-l-4' : null}`}>
            <label className={`${inputHasFocusRePassword ? 'pl-[9px]' : 'pl-[12px]'} opacity-70 text-sm pt-1`} htmlFor="rePassword">Re-Password </label>
            <input className='focus:outline-none pl-3 text-yellow-400'
              id='rePassword'
              type="password"
              onChange={formik.handleChange}
              value={formik.values.rePassword}
              onFocus={() => setInputHasFocusRePassword(true)}
              onBlur={(e) => {
                setInputHasFocusRePassword(false)
                formik.handleBlur(e)
              }}
            />
            {formik.touched.rePassword && formik.errors.rePassword && (
              <div className="text-red-400 text-sm ml-3 mb-2">{formik.errors.rePassword}</div>
            )}
          </div>
          <div className='flex justify-start gap-x-10 mt-5'>
            <button type='submit' className='border-yellow-400 max-w-[150px] text-white bg-yellow-400 font-semibold border py-[10px] px-7 mt-6 shadow-yellow-600 shadow-2xl'>SignUp</button>
            <Link href={'/login'}>
              <button className='border-yellow-400 max-w-[150px] text-yellow-400 font-semibold  border py-[10px] px-7 mt-6 shadow-yellow-600 shadow-2xl'>Login</button>
            </Link>
          </div>
        </form>
      </div>
      <div className='w-[50%] flex justify-center items-center bg-slate-100 h-screen'>
        <Image src={'/handsGraduate.png'} width={450} height={400} alt='HandGraduate' />
      </div>
    </div>
  )
}

export default Signup