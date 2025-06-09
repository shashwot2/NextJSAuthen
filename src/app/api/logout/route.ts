export const POST = async (request: Request) => {
    return new Response(JSON.stringify({ message: 'Logged out successfully' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': 'token=; Max-Age=0'
        }
    })
}