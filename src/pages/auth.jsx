import React, { useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Login from "@/components/login";
import Signup from "@/components/register";
import  {UrlState}  from "@/context";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  
  const {user,isAuthenticated,loading} =UrlState();
  const navigate = useNavigate();
 
  useEffect(function(){
     
     if(!loading&&isAuthenticated){navigate('/dashboard');}
  },[isAuthenticated,loading]);

  return (
    
    <div className="min-h-screen flex flex-col items-center">

      {/* Title */}
      <div className="text-center mt-10 mb-3">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to DummyLink</h1>
        <p className="text-gray-600 mt-2">Login or create a new account</p>
      </div>

      {/* Auth Box */}
      <div className="w-full max-w-md bg-white p-6">
        
        <Tabs defaultValue="login">
          {/* Tab buttons */}
          <TabsList className="flex justify-center gap-4 bg-gray-100 rounded-md p-1 w-full">
            <TabsTrigger value="login" className="px-4 py-2 rounded-md data-[state=active]:bg-white">
              Login
            </TabsTrigger>
            <TabsTrigger value="signup" className="px-4 py-2 rounded-md data-[state=active]:bg-white">
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* Login Form */}
          <TabsContent value="login" className="mt-6">
            <Login />
          </TabsContent>

          {/* Signup Form */}
          <TabsContent value="signup" className="mt-6">
            <Signup />
          </TabsContent>
        </Tabs>
      </div>

      {/* Terms text */}
      <p className="text-xs text-gray-500 mt-6">
        By continuing, you agree to our <span className="underline">Terms</span> & <span className="underline">Privacy</span>.
      </p>
    </div>
  );
}
