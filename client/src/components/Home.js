import React from 'react'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <h1>Welcome to By-design parlour App</h1>
      <Link to="/Signup">
        <button type="button">Sign Up</button>
        
      </Link>
    </div>
  )
}

export default Home
