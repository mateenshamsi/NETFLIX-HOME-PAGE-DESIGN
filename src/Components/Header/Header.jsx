import React from 'react'
import './Header.css'
import { BrowserRouter, Link } from "react-router-dom";
import {ImSearch} from 'react-icons/im'
export default function Header() {
  return (
    <>
      <BrowserRouter>
        <nav className='Header'>

          <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
          <div className='Links'>
            <Link to="/">TV Shows</Link>
            <Link to="/">Movies</Link>
            <Link to="/">Recently Added</Link>
            <Link to="/">My List</Link>
          
      
          </div>
          <ImSearch/>

        </nav>
      </BrowserRouter>
    </>
  )
}

