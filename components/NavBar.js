'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/wedoitalllogo.jpg';
import { auth, signOutUser } from "@/firebase.auth";
import { onAuthStateChanged } from "firebase/auth";

const NavBar = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsSignedIn(!!user);
        });

        return () => unsubscribe();
    }, []);

    const handleSignOut = async () => {
        await signOutUser();
    };

    return(
        <main>
            <div className="fixed top-0 h-28 w-screen 
                            justify-center items-center grid grid-cols-3
                            text-zinc-50 border-b shadow-md bg-white">
                <div>
                    <Image src={logo} alt="Company Logo" width={180} height={160} />
                    
                </div>
                <div>
                    <h1 className='grid text-xl text-black font-semibold'>
                        <span>(813) 808-1765</span>                
                    </h1>
                </div>
                {/* If user is signed in, show Logout button */}
                {isSignedIn && (
                    <Link href="/" className='relative flex text-center justify-end h-16 mx-8 tracking-[.20em] text-black hover:font-semibold hover:text-orange-400 '>
                        <button onClick={handleSignOut}>Logout</button>
                    </Link>
                )}
                {/* If user is not signed in, show Login button */}
                {!isSignedIn && (
                    <Link href="/login" className='relative flex text-center justify-end h-16 mx-8 tracking-[.20em] text-black hover:font-semibold hover:text-orange-400 '>
                        <button>Login</button>
                    </Link>
                )}
            </div>
        </main>
    );
};

export default NavBar;