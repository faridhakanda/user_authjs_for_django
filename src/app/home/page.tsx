
import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import Logout from '@/components/logoutform';
import Image from 'next/image';
import DataGet from '@/components/dataget';
const Home = async () => {
    
    const session = await auth();
    if (!session?.user) redirect("/");
  return (
    <div className="flex flex-col items-center m-4">
        {
            session?.user?.name && session?.user?.image ? (
                <>
                    <h1>Welcome, {session?.user?.name}</h1>
                    <Image 
                        src={session?.user?.image}
                        alt={session?.user?.name}
                        width={72}
                        height={72}
                        className="rounded-full"
                    />
                </>
                
            ) : (
                <div>
                    <h1 className="text-3xl text-blue-300">Welcome, {session.user.email}</h1>
                    <h1>user_auth is work correctly with user_register_back django api!</h1>
                
                    <div>
                        {/* here is add api get data from server */}
                        <DataGet />
                    </div>
                </div>
                
            )
        }
        <Logout />
    </div>
  )
}

export default Home