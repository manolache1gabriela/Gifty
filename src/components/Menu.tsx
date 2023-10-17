import React from 'react'

export default function Menu() {
    return (
        <div className='absolute top-28 right-0 w-full h-[83vh] flex justify-center items-center font-poppins'>
            <ul className='flex flex-col w-full text-center items-center gap-4'>
                <button className='w-1/2 h-12 hover:bg-orange-300 rounded-full border-2 text-lg border-indigo-950'>
                    <li>Log in</li>
                </button>
                <button className='w-1/2 h-12 hover:bg-orange-300 rounded-full border-2 text-lg border-indigo-950'>
                    <li>Logout</li>
                </button>
                <button className='w-1/2 h-12 hover:bg-orange-300 rounded-full border-2 text-lg border-indigo-950'>
                    <li>Register</li>
                </button>
                <button className='w-1/2 h-12 hover:bg-orange-300 rounded-full border-2 text-lg border-indigo-950'>
                    <li>Your Account</li>
                </button>
            </ul>
        </div>
    )
}
