import { NextResponse } from "next/server";


export const POST = async(request) => {
    const { username, email, password} = await request.json();
    console.log(username, email, password);
    try {
        const response = await fetch("http://127.0.0.1:8000/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, email, password}),
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error from Django API: ", errorData);
            return new NextResponse(JSON.stringify({error: errorData}), {
                status: response.status,
            });
        }
        const data = await response.json();
        console.log("User created successfully: ", data);
        return new NextResponse("User has been created", {
            status: 201,
        });
    } catch(error) {
        console.error("Error during user registration: ", error);
        return new NextResponse("Failed to register user", {
            status: 500,
        });
    }
};