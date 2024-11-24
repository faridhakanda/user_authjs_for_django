'use client'
import React, { useState } from 'react'
import { doCredentialLogin } from '@/app/actions'
import { useRouter } from 'next/navigation'
const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const response = await doCredentialLogin(formData);
            if (!!response.error) {
                setError(response.error.message);
            } else {
                router.push("/home");
            }
        } catch(e) {
            console.error(e.message);
            setError("Check your credentials!")
        }
    }
  return (
    <div>
        <div className="bg-red-500 text-3xl">{error}</div>
        <form
            className="my-2 flex flex-col items-center border border-gray-300 rounded-md w-64 text-center justify-center items-center mx-auto"
            onSubmit={handleSubmit}
        >
            <div className="my-2">
                <label htmlFor='email'>Email</label>
                <input className="border mx-2 border-gray-300 rounded" type="email" id="email" name="email"/>
            </div>
            <div className="my-2">
                <label htmlFor='password'>Password</label>
                <input className="border mx-2 border-gray-300 rounded" type="password" id="password" name="password"/>
            </div>
            <button type="submit" className="bg-orange-500 mt-4 rounded w-36 m-2">
                Credential Login
            </button>
        </form>
    </div>
  )
}

export default LoginForm