import React from 'react'

function Header() {
  return (
    <div className='banner w-100'>
        <div className='w-100 bg-dark'>
          <div className='navbar w-75 container'>
            <div className='d-flex justify-content-center align-items-center'>
            <i className="fa-solid fa-mountain-sun me-2" style={{color:'white'}}></i>
              <a href="">TRAVELER</a>
            </div>
            <div className='d-flex justify-content-between align-items-center w-50 r1'>
              <a href="">Features</a>
              <a href="">How it works</a>
              <a href="">Prices</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
        <div style={{height:'100vh'}} className="d-flex flex-column justify-content-center align-items-center ban">
          <h1>See the world like a local</h1>
          <p>Find a local guide consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <button>Get Started</button>
        </div>
    </div>
  )
}

export default Header