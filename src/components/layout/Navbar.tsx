import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="px-4 py-3  border-b">
      <div className="container mx-auto  flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-orange-600">
          TODO<span className="font-extralight">Master</span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center justify-between gap-2">
          <Link
            to="/"
            className="block py-2 px-4 hover:text-slate-700 text-white-700 hover:bg-orange-100 rounded-md transition"
          >
            Home
          </Link>
          <Link
            to="/tasks"
            className="block py-2 px-4 hover:text-slate-700 text-white-700 hover:bg-orange-100 rounded-md transition"
          >
            Tasks
          </Link>
          <Link
            to="/"
            className="block py-2 px-4 hover:text-slate-700 text-white-700 hover:bg-orange-100 rounded-md transition"
          >
            About
          </Link>
          <Link
            to="/"
            className="block py-2 px-4 hover:text-slate-700 text-white-700 hover:bg-orange-100 rounded-md transition"
          >
            Contact
          </Link>
          <Link
            to="/signup"
            className="block py-2 px-4 hover:text-slate-700 text-white-700 hover:bg-orange-100 rounded-md transition"
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="block py-2 px-4 bg-orange-600 text-white hover:bg-orange-700 rounded-md transition"
          >
            Login
          </Link>
        </div>
        <div>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </nav>
  );
}
