import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";
import { Button } from "flowbite-react";
export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
      <span className="px-4  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
        David</span>
      <em>Inspirations</em>
      </Link>
      <form className="py-1 flex items-center justify-center flex-1 lg:mr-32" >
        <TextInput 
        type="text"
        placeholder="Search..."
        />
      </form>
      <Button className="w-12 h-10 rounded-full flex items-center justify-center" color="gray">
        <AiOutlineSearch className="text-lg" />
      </Button>
    </Navbar>
  )
}
 