export const POST = async (request: Request) => {
    console.log("received logout req")
    return new Response(JSON.stringify({ message: 'Logged out successfully' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': 'token=; HttpOnly; SameSite=Strict; Max-Age=0; Path=/'
        }
    })
}