import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/pigeon">Go to Pigeon</Link>
    </>
  )
}

export default Home
