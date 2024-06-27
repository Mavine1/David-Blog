import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link to="/" className="selfwhitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
      <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
        David</span>
      <em>Inspirations</em>
      </Link>
    </Navbar>
  )
}
 