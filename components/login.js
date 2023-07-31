"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState} from "react";
import { NextResponse } from 'next/server'

export default function Login() {
  const [button, setbutton] = useState('login')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    }).then(res => {console.log(res)} );
    router.refresh();
  };

  const handleSignIn = async () => {
    console.log(email + password);
    await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    }).then(res => {
      if(res.data.session.access_token){
        router.push('/movies')
      }
    } );
    router.refresh();
  };

  return (
      <div className="bg-black flex flex-col items-center justify-center h-[100vh] text-white">
        <input onChange={(e)=>{
          setemail(e.target.value)
        }} placeholder="Email" type = "email" className="my-2 py-2 px-3 rounded-xl text-black" />
        <input onChange={(e)=>{
          setpassword(e.target.value)
        }} placeholder="Password" type="password" className="my-2 py-2 px-3 rounded-xl text-black" />
        {
          button == "login" ? 
          <div className="flex flex-col">
            <button className='mt-2  bg-[#64AE9D] text-black py-1 px-3 text-sm rounded-xl' onClick={handleSignIn}>Sign in</button>
            <p className="text-xs mt-3 italic">Already have an account? <span onClick={()=>{setbutton("signup")}} className="text-slate-300 underline hover:cursor-pointer">Sign up</span></p>
          </div>
          :
          <div className="flex flex-col">
            <button className='mt-2  bg-[#64AE9D] text-black py-1 px-3 text-sm rounded-xl' onClick={handleSignUp}>Sign up</button>
            <p className="text-xs mt-3 italic">Don't have an account? <span onClick={()=>{setbutton("login")}} className="text-slate-300 underline hover:cursor-pointer">Sign in</span></p>
          </div>
        }  
      </div>
  );
}  