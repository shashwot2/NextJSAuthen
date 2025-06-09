import jwt from 'jsonwebtoken'

export const GET = async (request: Request) => {
    const cookieHeader = request.headers.get('cookie')
    
    if (!cookieHeader) {
        return new Response('Token not found', { status: 400 })
    }
    
    const token = cookieHeader.slice(6)
    
    try {
        const decoded = jwt.verify(token, process.env.JWTSECRET!) as any
        
        return new Response(JSON.stringify({ 
            name: decoded.name,
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (error) {
        return new Response('Invalid token', { status: 401 })
    }
}