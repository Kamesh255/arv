import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us -  ARV Services & Consultant</title>
                <meta name="description" content=" ARV Services & Consultant" />
                <meta name="keywords" content=" ARV Services & Consultant" />
            </Helmet>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/contact.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}>
                    <p class='display-1 fw-bold text-white' data-aos="fade-up">Contac<span class='text-success'>t</span> Us</p>
                </div>
            </div>

            <div data-aos="zoom-up-in" class='col-11 m-auto row justify-content-center align-items-center flex-column-reverse flex-md-row rounded-4 my-5 bgdmg lmg' style={{ border: '3px solid #082b31' }}>
                <div class='col-md-6'>
                    <div class='col-11 m-auto text-start'>
                        <p class='fs-4 fw-semibold'>Address :</p>
                        <p class='fs-5'>Bahubali choke, PWD Colony, Barapatthar, Seoni, Madhya Pradesh 480661</p>
                        <p class='fs-4 fw-semibold mt-2'>Mobile :</p>
                        <p class='fs-5'><a href='tel:+919407508822' style={{ textDecoration: 'none' }}>+91 9876543210</a></p>
                        <p class='fs-4 fw-semibold mt-2'>Mail :</p>
                        <p class='fs-5'><a href='mailto:mayiservices@gmail.com' style={{ textDecoration: 'none' }}>arv.support@gmail.com</a> </p>

                    </div>
                </div>
                <div class='col-md-6 p-0 m-0'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d783.9668804924662!2d79.55202702619839!3d22.094537163383414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbahubali%20seon%20i!5e0!3m2!1sen!2sin!4v1745070855273!5m2!1sen!2sin" class='rounded-4' height="320" style={{ border: '0', width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact