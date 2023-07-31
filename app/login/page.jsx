import React from 'react'
import Login from '../../components/login'

export const metadata = {
  title: 'Login',
  description: 'Login to Explore the most latest and popular movies and TV shows',
  alternates: {
    canonical: '/',
    languagues: {
      'en-US': 'en-US'
    }
  }
}

export default function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  )
}
