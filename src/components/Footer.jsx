import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()
    return (
        <div class='bgdmg'>
            <div class='col-11 m-auto row'>
                <div class='col-lg-3 col-md-6'>
                    <br />
                    <div class='col-11  text-start '>
                        <img src={require('../image/footerLogo.png')} style={{ width: '200px' }} alt="" />
                        <div class='d-flex align-items-center gap-4 lmg mt-4 fs-2'>

                            <a>
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a>
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a>
                            <i class="bi bi-twitter-x"></i>
                            </a>
                            <a>
                            <i class="bi bi-youtube"></i>
                            </a>


                           
                            <br />

                        </div>
                    </div>
                </div>
                <div class='col-lg-5 col-sm-6'>
                    <br />
                    <div class='col-11 m-auto text-start lmg row'>
                        <p class='fs-5 col-12'><b>Menu</b></p>
                        <p class='mt-1 col-6' style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Home</p>
                        <p class='mt-1 col-6' style={{cursor:'pointer'}} onClick={()=>navigate('/about-us')}>About Us</p>
                        <p class='mt-1 col-6' style={{cursor:'pointer'}} onClick={()=>navigate('/services')}>Services</p>
                        <p class='mt-1 col-6' style={{cursor:'pointer'}} onClick={()=>navigate('/contact-us')}>Contact Us</p>
                 
                    </div>
                </div>

                <div class='col-lg-3 col-sm-6'>
                    <br />
                    <div class='col-11 m-auto text-start lmg'>
                        <p class='fs-5'><b>Address </b></p>
                        <p class=''>Bahubali choke, PWD Colony, Barapatthar, Seoni, Madhya Pradesh 480661</p>

                        <p class='fs-5 mt-2'><b>Mobile </b></p>
                        <p class=''><a href='tel:+9194075 08822' style={{textDecoration:'none'}}>+91 9876543210</a></p>

                        <p class='fs-5 mt-2'><b>Mail </b></p>
                        <p class=''><a href='mailto:mayiservices@gmail.com' style={{textDecoration:'none'}}>arv.support@gmail.com</a> </p>
                    </div>
                </div>

            </div>
            <br />
        </div>
    )
}

export default Footer