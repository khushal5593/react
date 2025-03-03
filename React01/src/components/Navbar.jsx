import React from 'react'

const Navbar = () => {
  return (
    <nav style={{display:'flex', height:"150px", width:"100%",backgroundColor:"blue"}}> 
        <h2>amazon</h2>
        <ul>
        <button style={{width:"45px"}}> login</button>
        <button> log out</button>
        </ul>
    </nav>
  )
}

export default Navbar