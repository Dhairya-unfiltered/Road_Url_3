// Signup.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {signup} from "@/db/auth";
import useFetch from "@/hooks/use-fetch"; 

import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";



export default function Signup() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const {data,loading,error,fn:Registerfn} = useFetch(signup,{name,email,password});
  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();
    // replace with real signup logic
    await Registerfn();
    if(!error){
      toast.success("Account created successfully!");
  }else{
      toast.error("Signup failed. Please try again.");
  }

    
  }

  useEffect(function(){
    if(loading===false&&data){
      console.log(data);
      navigate('/auth');
    }
  },[data]);



  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label className="text-sm">Full name</Label>
        <Input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-2"
        />
      </div>

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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-2"
        />
      </div>

      <Button type="submit" className="w-full mt-2 bg-purple-600">
        Create account
      </Button>
    </form>
  );
}
