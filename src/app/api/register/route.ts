import {v4 as uuid} from 'uuid';
import bcrypt from 'bcrypt';
import userStore from '../globalUsers'

export const POST = async (request: Request) => {
    const body = await request.json()
    if (!body) {
        return new Response(null, {status:500})
    }
    const { name, email, password } = body
    const userID = uuid()
    try{
    const hashedPassword = await bcrypt.hash(password, 12)
    if (name && email && password) {
        userStore.add({userID, name, email, hashedPassword})
        console.log("users in route", userStore)
        return new Response(null, { status: 201 })
    } else {
        return new Response(JSON.stringify({message:"error"}), { status:400})
    }
} catch (e){
        return new Response(JSON.stringify({"err":e}), { status:400})
    }
}