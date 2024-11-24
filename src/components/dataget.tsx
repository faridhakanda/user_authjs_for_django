'use client'
import React, {useState, useEffect } from 'react'

const DataGet = () => {
    const [message, setMessage] = useState("");
    useEffect(() => {
        const fetchMesage = async() => {
        try {
            const response = await fetch("http://127.0.0.1:8000/home/");
            const data = await response.json();
            setMessage(data.message);
        }catch(error) {
            console.error("Error fetching message: ", error);
        }
        };
    fetchMesage();
  },[]);
  return (
    <div className="bg-blue-300 p-3 rounded-md font-semibold">
        <h1>{message}</h1>
    </div>
  )
}

export default DataGet