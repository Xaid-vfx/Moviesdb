'use client';
import React from 'react'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from 'next/navigation';
import GET from '../api/route'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import Card from '../../components/Card.js';
import SkeletonCard from '../../components/SkeletonCard'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function Movies() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [movies, setMovies] = useState([])

  const {
    data, isLoading
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  })

  if (isLoading || !data) {
    return <div className=' text-white p-16'>
    <button className='my-4 px-2 py-1 border hover:cursor-pointer'>Sign out</button>
      <div className='grid grid-cols-4 gap-5'>
        {
          [...new Array(20)].map((e)=>{
            return <SkeletonCard key={e.id}/>
          })  
         }
      </div>
    </div>
  }

  async function getMovies() {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=1e314b4672955848ea590eb726800063`)
    console.log(res.data.results);
    return res.data.results;
  }

  const handleSignOut = async () => {
    console.log(await supabase.auth.getUser())
    await supabase.auth.signOut();
    router.refresh();
    router.push('/')
  };

  return (

    <div className='text-white p-16'>
      <button className='my-4 px-2 py-1 border hover:cursor-pointer' onClick={handleSignOut}>Sign out</button>
      <div className='grid grid-cols-4 gap-5'>
        {data.length > 0 ?
          data.map(e => {
            return <Card key={e.id} name={e.name} image={e.poster_path} desc={e.overview} />
          }) : 'no'}
      </div>
    </div>
  )
}
