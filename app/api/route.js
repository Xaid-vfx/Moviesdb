import { NextResponse } from 'next/server'
import axios from 'axios'

async function GET() {
    const url = 'https://api.themoviedb.org/3'
    const res = await fetch(`${url}/tv/popular?api_key=1e314b4672955848ea590eb726800063`)
  const data = await res.json()
  console.log(data);
 
  return data;
}

export default GET();