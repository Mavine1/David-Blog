import { Navbar } from "flowbite-react";
import { Link} from "react-router-dom";

export default function Header() {
  return (
  <Navbar className="border-b-">
    <Link to="/" className="self-center whitespace-nowrap text-sm:text-xl font-semibold
    dark:text-white">
    <span>David</span>
    Blog
    
    </Link>

  </Navbar>
  )
}
