'use client'
import Link from 'next/link'
import { useAuth } from "./context/authContext";
import { useRouter } from "next/router";
export default function Home() {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }
  console.log(useAuth)
  return (

    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>

      {user ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p className="text-lg">Welcome, {user.name}!</p>
          <p className="mt-2">You are successfully logged in.</p>
        </div>
      ) : (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <p className="text-lg">Please log in to access your account.</p>
          <Link href="/login"> Login</Link>
        </div>
      )}
    </div>
  );

}
