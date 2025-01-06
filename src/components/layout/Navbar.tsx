import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="py-3 border-b">
      <div className="max-w-7xl mx-auto  flex items-center justify-between px-5">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-red-600">
          TODO<span className="font-extralight">Master</span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center justify-between gap-2">
          <Link
            to="/"
            className="block py-2 px-4 hover:text-slate-700 text-white-700 hover:bg-red-100 rounded-md transition"
          >
            Home
          </Link>
          <Link
            to="/tasks"
            className="block py-2 px-4 hover:text-slate-700 text-white-700 hover:bg-red-100 rounded-md transition"
          >
            Tasks
          </Link>
          <Link
            to="/users"
            className="block py-2 px-4 hover:text-slate-700 text-white-700 hover:bg-red-100 rounded-md transition"
          >
            Users
          </Link>
          <Link
            to="/"
            className="block py-2 px-4 hover:text-slate-700 text-white-700 hover:bg-red-100 rounded-md transition"
          >
            About
          </Link>
          <Link
            to="/"
            className="block py-2 px-4 hover:text-slate-700 text-white-700 hover:bg-red-100 rounded-md transition"
          >
            Contact
          </Link>
          <Link
            to="/signup"
            className="block py-2 px-4 hover:text-slate-700 text-white-700 hover:bg-red-100 rounded-md transition"
          >
            Signup
          </Link>
          <Button>
            <Link
              to="/login"
              className="block py-2 px-4  text-white  rounded-md transition"
            >
              Login
            </Link>
          </Button>
        </div>
        <div>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </nav>
  );
}
