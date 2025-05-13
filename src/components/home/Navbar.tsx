import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Link, NavLink } from 'react-router'
import { IoMdMenu } from "react-icons/io";
import logo from '../../assets/logo.png'
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
      <div className='w-full py-5 sticky top-0 backdrop-blur-lg z-10'>
      <div className="w-11/12 mx-auto flex justify-between items-center">
      
      <div className="flex items-center space-x-1.5n">
          {/* mobile menu */}
         <div className="md:hidden mr-1.5">
         <DropdownMenu>
  <DropdownMenuTrigger><IoMdMenu /></DropdownMenuTrigger>
  <DropdownMenuContent>
    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
    <DropdownMenuSeparator />
    <DropdownMenuItem><NavLink to='/'>Home</NavLink></DropdownMenuItem>
    <DropdownMenuSeparator />
   
    
         <DropdownMenuItem><NavLink to='/add-foods'>Add Foods</NavLink> </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><NavLink to='/cart'>Cart</NavLink></DropdownMenuItem>

     
    <DropdownMenuSeparator />
    <DropdownMenuItem><NavLink to='/all-foods'>All Foods</NavLink></DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

         </div>

         {/* logo */}
      <Link to='/'>  
      <div className="flex items-center space-x-2">
      <img width={40} src={logo} alt='Sweet Eggs' />
      <h2 className='text-2xl font-bold'>Sweet Eggs</h2>
      </div>
      </Link>
      </div>

    {/* desktop menu */}
   
      <div className="hidden md:flex space-x-3">
      
        <NavLink to='/'>Home</NavLink>
         <NavLink to='/add-foods'>Add Foods</NavLink> 
        <NavLink to='/all-foods'>All Foods</NavLink>
        {/* <Link href='/Contacts'>Contacts</Link> */}
        
      </div>

      <div className="flex space-x-2">
    {/* theme controller */}
         <div className="">
      <ModeToggle/>
    </div>

      <Avatar>
         <AvatarImage src={''} alt="@foods" />
         
      <AvatarFallback>N/A</AvatarFallback>
    </Avatar>
         
        <NavLink to='/sign-up'><Button>Sign Up</Button></NavLink>
        <NavLink to='/sign-in'><Button>Sign In</Button></NavLink>
        
       
        
      
       
     
      </div>
      </div>
    </div>
  )
}

export default Navbar