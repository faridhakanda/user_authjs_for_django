"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
    const router = useRouter();
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);

            const username = formData.get("username");
            const email = formData.get("email");
            const password = formData.get("password");
            
            const response = await fetch(`/api/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username, 
                    email,
                    password
                })
            });
            response.status === 201 && router.push("/");
        } catch(e) {
            console.error(e.message);
        }
    }
  return (
    <div>
        <form
            className="my-5 flex flex-col items-center border p-3 border-gray-500 rounded-md"
            onSubmit={handleSubmit}
        >
            <div className="my-2">
                <label htmlFor='username'>Username: </label>
                <input 
                    className="border mx-2 border-gray-500 rounded"
                    type="username" 
                    id="username" 
                    name="username"
                />
            </div>
            <div className="my-2">
                <label htmlFor='email'>Email: </label>
                <input 
                    className="border mx-2 border-gray-500 rounded"
                    type="email" 
                    id="email" 
                    name="email"
                />
            </div>
            <div className="my-2">
                <label htmlFor='password'>Password: </label>
                <input 
                    className="border mx-2 border-gray-500 rounded"
                    type="password" 
                    id="password" 
                    name="password"
                />
            </div>
            <button
                type="submit"
                className="bg-orange-300 mt-4 rounded flex justify-center items-center w-36"
            >
                Register
            </button>
        </form>
    </div>
  )
}

export default RegisterForm