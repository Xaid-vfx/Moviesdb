'use client';
import React from 'react'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from 'next/navigation';

export default function movies() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  


  const handleSignOut = async () => {
    console.log(await supabase.auth.getUser())
    await supabase.auth.signOut();
    router.refresh();
    router.push('/')
  };
  return (
    <div className='bg-black text-white'>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  )
}
