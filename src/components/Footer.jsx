import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()
    return (
        <div class='bgdmg'>
            <div class='col-11 m-auto row'>
                <div class='col-lg-4 col-md-6'>
                    <br />
                    <div class='col-11  text-start '>
                        <img src={require('../image/footerLogo.png')} style={{ width: '200px' }} alt="" />

                        {/* <div class='d-flex align-items-center gap-4 lmg mt-4 fs-2'>

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

                        </div> */}
                    </div>
                </div>
                <div class='col-lg-4 col-md-6'>
                    <br />
                    <div class='col-11 m-auto text-start lmg row'>
                        <p class='fs-5 col-12'><b>Menu</b></p>
                        <p class='mt-1' style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Home</p>
                        <p class='mt-1' style={{ cursor: 'pointer' }} onClick={() => navigate('/about-us')}>About Us</p>
                        <p class='mt-1' style={{ cursor: 'pointer' }} onClick={() => navigate('/services')}>Services</p>
                        <p class='mt-1' style={{ cursor: 'pointer' }} onClick={() => navigate('/contact-us')}>Contact Us</p>

                    </div>
                </div>

                <div class='col-lg-4 '>
                    <br />
                    <div class='col-11 m-auto text-start lmg'>

                        <p class='fs-5'><b>Address </b></p>
                        <p class='mt-1'>Sukrwari Bazar, Near Bada Jain Mandir, In Front of Rajshree Jeweller  Seoni, Madhya Pradesh, 480661, India  </p>
                        {/* <p class='mt-2'><b>Nagpur :</b> Padole Nagar, Jai Bhim Chowk Nagpur, Maharashtra, 440008 </p> */}


                        <p class='fs-5 mt-2'><b>Mobile </b></p>
                        <p class=''><a href='tel:+919585049048' style={{ textDecoration: 'none' }}>+91 95850 49048</a></p>

                        <p class='fs-5 mt-2'><b>Mail </b></p>
                        <p class=''><a href='mailto:arvservicesconsultant@gmail.com' style={{ textDecoration: 'none' }}>arvservicesconsultant@gmail.com</a> </p>

                        <p class=''><a href='mailto:info.arvservices@gmail.com' style={{ textDecoration: 'none' }}>info.arvservices@gmail.com</a> </p>
                    </div>
                </div>

            </div>
            <br />
        </div>
    )
}

export default Footer