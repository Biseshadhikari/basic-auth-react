// src/Login.js
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()


    useEffect(()=>{ 
        console.log(typeof(JSON.parse(localStorage.getItem('isAuthenticated'))))
    },[])
    function submitform(){ 
        loginsubmit()
        
    }
    async function loginsubmit(){ 

        const data = { 
            username:username,
            password:password
        }
        try{ 
            const response = await axios.post('http://127.0.0.1:8000/login/',data)

            if (response.status == 200){ 
                localStorage.setItem('token',response.data.token)
                localStorage.setItem('isAuthenticated',JSON.stringify(true))
                navigate('/')
            }
            else{ 
                console.log('error occured')
            }
        }catch{ 
            console.log('error occured')
        }
        
       
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form className="space-y-4" onSubmit={(e)=>{ 
                    e.preventDefault()
                    submitform()
                }}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            required
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="username"
                            value = {username}
                            onChange={(e)=>{
                                setUsername(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="********"

                            value = {password}
                            onChange={(e)=>{ 
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account? 
                    <a href="/register" className="font-medium text-blue-600 hover:text-blue-500"> Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
