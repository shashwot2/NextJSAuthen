import jwt from 'jsonwebtoken'

export const GET = async (request: Request) => {
    const cookieHeader = request.headers.get('cookie')
    
    if (!cookieHeader) {
        return new Response(JSON.stringify({ message: 'No cookies found' }), { 
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        })
    }
    
    const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        acc[key] = value;
        return acc;
    }, {});
    
    const token = cookies.token;
    
    if (!token) {
        return new Response(JSON.stringify({ message: 'Token not found' }), { 
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        })
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWTSECRET!) as any
        
        return new Response(JSON.stringify({ 
            name: decoded.name,
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Invalid token' }), { 
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}