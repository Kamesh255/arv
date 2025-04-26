import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
const SubContact = () => {
    useEffect(() => {
          AOS.init({ duration: 2000 });
      }, [])
      const navigate = useNavigate()
  return (
    <div class='col-11 m-auto bgdmg rounded-4 my-4' data-aos="fade-up">
        <br />
        <div class='col-11 m-auto text-start   lmg '>
            <p class='fs-2 fw-bold'>Get in Touch </p>
            <p class='fs-4'>At <b>ARV Services & Consultant</b>, we are committed to partnering with you to achieve excellence in food 
            safety and quality. Together, we can build a safer and more compliant food industry</p>
            <button class='btn btn-outline-light rounded-5 mt-2' onClick={()=>navigate('/contact-us')}>Contact Us</button>

        </div>
        <br />
    </div>
  )
}

export default SubContact