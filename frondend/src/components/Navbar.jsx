import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">MyApp</h1>
        <div className="flex space-x-4">
          <Link to="/dashboard" className="text-white hover:underline">
            Dashboard
          </Link>
          <Link to="/profile" className="text-white hover:underline">
            Profile
          </Link>
          {!token ? (
            <Link to="/login" className="text-white hover:underline">
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-white hover:underline"
            >
              Logout
            </button>
          )}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
