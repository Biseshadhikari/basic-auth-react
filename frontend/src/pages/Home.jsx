import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
    const [isLoading,setIsLoading] = useState(true)
    const [message,setMessage] = useState('')
    useEffect(()=>{ 
        getData()


    },[])
    async function getData(){ 
        const token  = localStorage.getItem('token')
        
        try { 
            const response = await axios.get('http://127.0.0.1:8000/protected/',{ 
                headers: { 
                    'Authorization':`Token ${token}`
                }
            })
            if (response.status == 200){ 
               setMessage(response.data.message)
               setIsLoading(false)
            }
        }
        catch{ 
            console.log('Error occured')
        }
    }
  return (

    <div>{isLoading?(
        <div>loading...</div>
    ):(
        <div>
            {message}
        </div>
    )}</div>
  )
}

export default Home