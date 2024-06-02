"use client";

import React from 'react'
import { signOut } from 'next-auth/react';

export const LogoutButton = () => {
    const handleLogout = () => {
        signOut({
            callbackUrl: "/",
        })
    }

  return (
    <div>
    <button type='button' onClick={ handleLogout } className='btn btn-primary'>LogoutButton</button>
    </div>
  )
}
