import { Navbar, TextInput } from "flowbite-react";
import { Link} from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";

export default function Header() {
  return (
  <Navbar className="border-b-2">
    <Link to="/" className="-center whitespace-nowrap text-sm
    sm:text-xl font-semibold dark:text-white">
    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500
    via-purple-500 to-pink-500 rounded-lg text-white">David</span>
    <em>Inspirations</em>
</Link>
  <form className='flex items-center justify-center flex-1 lg:mr-32'>
     className='hidden lg:inline'/>
  </form>
  </Navbar>
  )
}
