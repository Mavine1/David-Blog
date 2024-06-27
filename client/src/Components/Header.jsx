import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

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
        className="hidden lg:inline"
         />
      </form>
      <Button className="lg:hidden" color="gray" pill>
      <AiOutlineSearch/>
      </Button>
      <div className="">
        <Button className="hidden sm:inline"  color="gray" pill>
        <FaMoon />  
          </Button>
          <Link to="/sign-in">
          <Button className="hidden sm:inline"  color="gray" pill>Sign In</Button>
          </Link> 
      </div>
    </Navbar>
  );
}
 