import { Menu, Link2 } from 'lucide-react'; // Optional: if using lucide-react for icons
import {useNavigate} from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {logout} from "@/db/auth"


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

import {Link} from 'react-router-dom'


import useFetch from "@/hooks/use-fetch";

import {UrlState} from "@/context";


const Header = () => {
  const navigate = useNavigate();
  function redirectToAuth(){
        navigate('/auth');
  }

  const {fetchUser,user} = UrlState();
   
  function redirectToDash(){
        navigate('/dashboard');
  }
  const {data,loading,error,fn:logoutFn}=useFetch(logout);
  
  const handleLogout = async () => {
    try {
      await logoutFn();
      await fetchUser();
      navigate("/auth");
      
    } catch (err) {
      console.error("Logout failed", err);
    }
  };


  return (
    <header className="flex items-center justify-between px-6 py-3 border-b ">

      {/* Left side: Logo + Name */}
      <button className="flex items-center gap-3" onClick={redirectToAuth}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 shadow-sm flex items-center justify-center">
          <Link2 className="w-5 h-5 text-white" />
        </div>
        <span className="text-lg  text-gray-900 font-mono font-bold">DummyLink</span>
      </button>

{/* Right side: Menu icon */}
  <Sheet>
  <SheetTrigger><Menu className="w-6 h-6" strokeWidth={3} /></SheetTrigger>
  <SheetContent>
         
         <nav className="mt-6 space-y-2">
          <SheetClose className="block px-3 py-2 rounded-md hover:bg-gray-100" onClick={redirectToDash}>
                My Links
          </SheetClose>
      
          <SheetClose className="block px-3 py-2 rounded-md hover:bg-gray-100"  onClick={handleLogout}>
               {!user&&<a>Login</a>}
                {user&&<a>Logout</a>}
          </SheetClose>
        </nav>
  </SheetContent>
</Sheet>



    </header>
  );
};

export default Header;



