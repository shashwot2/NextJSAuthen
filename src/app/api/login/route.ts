import userStore from "../globalUsers"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const POST = async (request: Request) => {
    const body = await request.json()
    console.log({userStore})
    const { email, password} = body
   const matchingUser = userStore.find(element => element.email === email);

    if (matchingUser && await bcrypt.compare(password , matchingUser.hashedPassword )) {
        const JWTSecret= process.env.JWTSECRET
        console.log("here")
        // Gen the cookie
        const token =  jwt.sign({id: matchingUser.userID, name: matchingUser.name}, JWTSecret, {expiresIn: '24h'})
        let response = new Response(JSON.stringify({"message":"Loggedin"}),{status:200} )
        response.headers.set('Set-Cookie', `token=${token}; HttpOnly;SameSite=Strict;Max-Age=${24*60*60};Path=/`)
        return response
    } else {
        return new Response(JSON.stringify({"message":"Incorrect login or password"}),{status:401} )
    }
}
