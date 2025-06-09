'use client'
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/authContext'
import { useRouter } from 'next/navigation'

const profile = () => {
    const [authorized, setIsAuthorized] = useState(false)
    const { checkAuth } = useAuth()
    const router = useRouter()
     useEffect(() => {
        const checkAuthorization = async () => {
            try {
                const response = await checkAuth()
                console.log("respones", response)
                if (!response){
                    setIsAuthorized(false)
                    router.push("/")
                }
                setIsAuthorized(true)
            } catch (error) {
                setIsAuthorized(false)
                    router.push("/")
        }
    }
        
        checkAuthorization()
    }, [])


    return (
        <>
<div>Profile, protected content</div>
        </>
    )
}

export default profile 