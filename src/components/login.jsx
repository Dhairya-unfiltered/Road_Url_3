// Login.jsx
import React, { useEffect, useState } from "react";
import {UrlState} from "@/context";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import useFetch from "@/hooks/use-fetch"; 
import { LoginApi } from "@/db/auth";

import { BeatLoader } from "react-spinners";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


import { loginWithGoogle } from "@/db/auth";
import { FcGoogle } from "react-icons/fc";



export default function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
  
async function handleGoogleLogin() {
  try {
    await loginWithGoogle();
  } catch (err) {
    toast.error(err.message);
  }
}
  
  const {data,loading,error,fn:Loginfn} = useFetch(LoginApi,{email,password});

  const { fetchUser,user }= UrlState();

  async function  handleSubmit (e) {
     e.preventDefault();
     await Loginfn();
     await fetchUser();
  
  }

  // async function handleSubmit(e) {
//   e.preventDefault();

//   try {
//     await Loginfn({ email, password });
//     await fetchUser(); 
//     toast.success("Logged in successfully!");
//     navigate("/dashboard");
//   } catch (err) {
//     toast.error(err.message);
//   }
// }
  
  
  useEffect(()=>{
    if(error){
      toast.error("can't log in");
    }else if(data&&!loading){
          toast.success("Logged in successfully!");
         navigate('/dashboard')
    }
  },[error,data]);


  return (
    <>
 

    <form onSubmit={handleSubmit} className="space-y-4">
       <div>
        <Label className="text-sm">Email</Label>
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-2"
        />
      </div>

      <div>
        <Label className="text-sm">Password</Label>
        <Input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-2"
        />
      </div>

      <Button type="submit" className="w-full mt-2 bg-purple-600">
        {loading ? (
  <BeatLoader size={8} color="#fff" />
) : "Login"}
      </Button>
      
      
      <Button
  type="button"
  onClick={handleGoogleLogin}
  className="w-full mt-3 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-sm font-medium bg-purple-600 transition"
>
  <FcGoogle size={20} />
  Continue with Google
</Button>
    </form>
    </>
  );
}
