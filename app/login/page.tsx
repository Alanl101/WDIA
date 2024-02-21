import React from 'react';
import logo from '../../public/wedoitalllogo.jpg';
import Link from 'next/link';
import Image from 'next/image';

function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md text-center">
        <div className="flex items-center justify-center">
            <Image src={logo} alt="Company Logo" width={180} height={160} />
        </div>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600"> Username </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600"> Password </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mx-auto" > Log In </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
