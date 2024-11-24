import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const {
    handlers: { GET, POST },
    signIn,
    signOut,
    auth
} = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                // this tapas code following solution for signin
                // if (credentials === null) return null;
                // try {
                //     const user = getUserByEmail(credentials?.email);
                //     if (user) {
                //         const isMatch = user?.password === credentials?.password;
                //         if (isMatch) {
                //             return user;
                //         }
                //     } else {
                //         throw new Error("Check your password!");
                //     }
                // } catch(error) {
                //     throw new Error(error);
                // }

                // now here is solve with chapgpt
                try {
                    const response = await fetch("http://127.0.0.1:8000/loginwithemail/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password,
                        }),
                    });
                    if (response.ok) {
                        const data = await response.json();
                        return {
                            id: data.id,
                            username: data.user.username,
                            email: data.email,
                            accessToken: data.access,
                            refreshToken: data.refresh,
                        }
                    } else {
                        const errorData = await response.json();
                        throw new Error(errorData.detial || "Invalid credentials!");
                    }

                } catch(error: any) {
                    throw new Error(error.message || "Failed to log in");
                }
                
            }
        
        })
    ],
})