"use client";


import React from 'react'
import { RegisterForm } from '@/components/RegisterForm'
import { signIn } from 'next-auth/react'

export default async function page() {


  return (
    <main className='h-screen flex justify-center flex-col items-center bg-white px-4'>
      <RegisterForm onSubmit={(data) => {
        signIn('credentials', { email: data.email, name: data.name, password: data.password, callbackUrl: '/' })
      }} />

    </main>
  )
}
