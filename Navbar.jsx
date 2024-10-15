import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";

export default function Navbar() {
  return (
    <div className='container '>

<nav className="navbar navbar-expand-lg bg-white fixed-top">
  <div className="container-fluid">
    <Link><img src='Images/logo.png' alt='logo' className={`${style.imgone}`}/></Link>
    <Link className="navbar-brand fw-bold  fs-4 " to={''}>Furniro</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav  mx-auto ">
        <li class="nav-item">
          <Link className="nav-link active fw-medium m-1"  to={'Home'}>Home</Link>
        </li>
        <li class="nav-item  ">
          <Link className="nav-link active fw-medium m-1" to={'Shop'} >Shop</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link  active fw-medium  m-1" to={'About'}>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link  active fw-medium  m-1" to={'Contact'}>Contact</Link>
        </li>
      </ul>
      <div className='position-absolute end-0'>
        <Link className=''><FaRegUser className='text-dark m-3 fs-5'  /></Link>
        <Link to={'/Cartsidebar'}><CiSearch  className='text-dark m-3 fw-semibold fs-4'/></Link>
        <Link><IoIosHeartEmpty  className='text-dark m-3 fw-semibold fs-4'/></Link>
        <Link  to={'Cart'}><TiShoppingCart className='text-dark m-3 fw-semibold fs-3' /></Link>

      </div>
    </div>
  </div>
</nav>



    </div>
  )
}
