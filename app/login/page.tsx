import React from 'react';
import logo from '@/public/wedoitalllogo.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { SignInComponent } from "@/components/SignIn";

// Test user
// Username: admin@wdia.com
// Password: admin!

function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md text-center">
        <div className="flex items-center justify-center">
            <Image src={logo} alt="Company Logo" width={180} height={160} />
        </div>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <SignInComponent />
      </div>
    </div>
  );
}

export default Login;
