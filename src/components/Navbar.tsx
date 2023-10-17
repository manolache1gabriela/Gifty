import React, { useState } from 'react'
import Logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

export default function Navbar() {

    const [signedIn, setSignedIn] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    function toggleSigned() {
        setSignedIn(!signedIn)
    }
    function toggleMenu() {
        setShowMenu(!showMenu)
    }

    return (
        <div className='w-full h-28 shadow-2xl shadow-blue-500/20 flex items-center justify-center'>
            <div className='h-full w-[80%] flex items-center justify-between'>
                <img className='h-1/2' src={Logo} alt="gifty logo" />
                <div>
                    <div className='hidden lg:flex'>
                        {!signedIn && <button onClick={toggleSigned}>Sign in</button>}
                        {signedIn &&
                            <div className='flex gap-8'>
                                <button onClick={toggleSigned}>Logout</button>
                                <button>Your Account</button>
                            </div>
                        }
                    </div>
                    {!showMenu && <button onClick={toggleMenu} className='lg:hidden text-2xl text-indigo-950'><FontAwesomeIcon icon={faBars} /></button>}
                    {showMenu && <button onClick={toggleMenu} className='lg:hidden text-2xl text-indigo-950'><FontAwesomeIcon icon={faCircleXmark} /></button>}
                </div>
            </div>
            {showMenu && <Menu />}
        </div>
    )
}
