import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const nav = document.querySelector('.navbarMain');
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add('navbarMain--hidden');
      } else {
        nav.classList.remove('navbarMain--hidden');
      }
      lastScrollY = window.scrollY
    })
  })

  useEffect(() => {
    const nav = document.querySelector('.menus');

    if (isActive) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }

    // Clean up when the component unmounts or isActive changes
    return () => {
      nav.classList.remove('active');
    };
  }, [isActive]);

  const navigate = useNavigate()

  const movePage = (path) => {
    setIsActive(false)
    navigate(path)
  }
  return (
    <div>
      <div class='navbarMain d-flex align-items-center ' style={{ width: '100%', overflowX: 'hidden' }}>
        <div class=' col-11 m-auto d-flex align-items-center justify-content-between'>
          <div style={{ height: '60px' }}>
            <img src={require('../image/logo.png')} onClick={()=>navigate('/')} style={{ height: '100%' ,cursor:'pointer'}} alt="" />
          </div>
          <div class='navDec  '>
            <div class='d-flex justify-content-center align-items-center  gap-5 h-100  '>
              <p class='fs-5 fw-bold' style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Home</p>
              <p class='fs-5 fw-bold' style={{cursor:'pointer'}} onClick={()=>navigate('/about-us')}>About Us</p>
              <p class='fs-5 fw-bold' style={{cursor:'pointer'}} onClick={()=>navigate('/services')}>Services</p>
              {/* <p class='fs-5 fw-bold' style={{cursor:'pointer'}} onClick={()=>navigate('/fostac')} >Fostac</p> */}

              <p class='fs-5 fw-bold' style={{cursor:'pointer'}} onClick={()=>navigate('/contact-us')}>Contact Us</p>
            </div>
          </div>
          <div class='d-flex gap-5 align-items-center'>
            {/* <button class='btn btn-outline-light rounded-5'>Get Quote</button> */}
            <div class='navMobile' onClick={() => setIsActive(!isActive)}>
              <div class={isActive ? 'hamburger is-active' : 'hamburger'} id="hamburger">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='menus d-flex justify-content-center align-items-center'>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div class='d-grid justify-content-center  align-items-center' style={{ height: '100%' }}>
            <div class='d-grid gap-3' style={{color:''}} >
              <p class='fs-1 fw-semibold' style={{ cursor: 'pointer' }} onClick={() => movePage('/')}>Home</p>
              <p class='fs-1 fw-semibold' style={{ cursor: 'pointer' }} onClick={() => movePage('/about-us')}>About Us</p>
              <p class='fs-1 fw-semibold' style={{ cursor: 'pointer' }} onClick={() => movePage('/services')}>Services</p>
              {/* <p class='fs-1 fw-semibold' style={{ cursor: 'pointer' }} onClick={() => movePage('/fostac')}>Fostac</p> */}

              <p class='fs-1 fw-semibold' style={{ cursor: 'pointer' }} onClick={() => movePage('/contact-us')}>Contact Us</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar