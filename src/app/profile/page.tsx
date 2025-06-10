'use client'
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/authContext'
import { useRouter } from 'next/navigation'

const profile = () => {
    const { checkAuth } = useAuth()
    const router = useRouter()
     useEffect(() => {
        const checkAuthorization = async () => {
            try {
                const response = await checkAuth()
                console.log("respones", response)
                if (!response){
                    router.push("/")
                }
            } catch (error) {
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