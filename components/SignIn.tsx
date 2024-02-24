'use client';

import React, { useState, useEffect } from "react";
import { signIn } from "@/firebase.auth";

export const SignInComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");

        try {
            const user = await signIn(email, password);
            console.log("User signed in successfully", user);
            // Handle login success
            // For now, redirect to home page
            window.location.href = "/";
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-600"> Username </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Enter your password"
                />
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Login</button>
        </form>
    );
};