import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {UrlState} from "@/context";
// import {BarLoader} from "react-spinners";

function RequireAuth({children}) {
  
  const navigate = useNavigate();

  const {loading, isAuthenticated} = UrlState();
    console.log("Require auth re-rendering with isAuth ",isAuthenticated );

  useEffect(() => {
    if (!isAuthenticated && loading === false) navigate("/auth");
  }, [isAuthenticated, loading]);



  if (isAuthenticated) return children;
}   

export default RequireAuth;
