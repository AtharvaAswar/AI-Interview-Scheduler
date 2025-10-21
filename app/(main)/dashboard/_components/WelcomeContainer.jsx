"use client"
import React from 'react'
import { UserContext } from '@/app/provider'
import Image from 'next/image';

function WelcomeContainer() {

    const { user } = UserContext();
    console.log("User in WelcomeContainer:", user);
    return (
        <div className='bg-white p-5 rounded-xl flex justify-between items-center'>
            <div>
                <h2 className='text-lg font-bold'>Welcome back, {user?.name}</h2>
                <h2 className='text-gray-500'>AI driven Interviews, Hassel-free Hiring</h2>
            </div>
            {user && <Image src={user?.picture} alt='user-avatar' width={40} height={40} className='rounded-full' />}
        </div>
    )
}

export default WelcomeContainer