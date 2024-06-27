import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link to="/" className="self px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
      <span>David</span>
      <em>Inspirations</em>
      
      </Link>
    </Navbar>
  )
}
