import {v4 as uuid} from 'uuid';
import bcrypt from 'bcrypt';
import userStore from '../globalUsers'

export const POST = async (request: Request) => {
    const body = await request.json()
    if (!body) {
        return new Response(JSON.stringify({message: "No body provided"}), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        })
    }
    
    const { name, email, password } = body
    const userID = uuid()
    
    try {
        const hashedPassword = await bcrypt.hash(password, 12)
        if (name && email && password) {
            userStore.add({userID, name, email, hashedPassword})
            console.log("users in route", userStore)
            return new Response(JSON.stringify({ 
                success: true, 
                message: 'User registered successfully',
                userID: userID 
            }), { 
                status: 201,
                headers: { 'Content-Type': 'application/json' }
            })
        } else {
            return new Response(JSON.stringify({message: "Missing required fields"}), { 
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            })
        }
    } catch (e) {
        return new Response(JSON.stringify({message: "Registration failed", error: e.message}), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}