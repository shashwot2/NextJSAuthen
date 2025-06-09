import { useAuth } from "../context/authContext";
import { useRouter } from "next/navigation";
const Header = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 
            className="text-xl font-bold cursor-pointer"
            onClick={() => router.push('/')}
          >
            My App
          </h1>
          
          <nav className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span>Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <button
                  onClick={() => router.push('/login')}
                  className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => router.push('/register')}
                  className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded transition-colors"
                >
                  Register
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header