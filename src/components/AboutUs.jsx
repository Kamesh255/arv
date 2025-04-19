import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
import { Helmet } from 'react-helmet';


const coreValue = [
    {
        title: "Integrity",
        text: "We operate with honesty, transparency, and fairness in everything we do.",
        img: `${require('../image/integrity.png')}`
    },{
        title: "Excellence",
        text: "We strive to exceed expectations through quality-driven processes and continuous improvement.",
        img: `${require('../image/exellent.png')}`
    },
    {
        title: "Innovation",
        text: "We bring creative and practical solutions to complex challenges.",
        img: `${require('../image/inovation.png')}`
    },
    {
        title: "Collaboration",
        text: "We work hand-in-hand with healthcare teams to co-create better outcomes.",
        img: `${require('../image/collaboration.png')}`
    },
    {
        title: "Commitment",
        text: "We are deeply invested in our client’s success and healthcare transformation.",
        img: `${require('../image/commitment.png')}`
    }
]
const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us -  ARV Services & Consultant </title>
                <meta name="description" content="ARV Services & Consultant" />
                <meta name="keywords" content=" ARV Services & Consultant" />
            </Helmet>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/food3.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                    <p class='display-1 fw-bold text-white' data-aos="zoom-in">Abou<span class='text-success'>t</span> Us</p>
                </div>
            </div>

            {/* <div class='col-11 m-auto row align-items-center mt-3'>
                <div class='col-md-6'>
                    <div class='col-sm-11 m-auto'>
                        <p class='fs-5 tjustify mt-5' data-aos="fade-up"><b>
                            ARV Services & Consultant</b>is a professionally managed organization committed to delivering exceptional consultancy and auditing services tailored specifically for the healthcare sector. Founded by a team of highly qualified experts, ARV brings deep-rooted knowledge, industry best practices, and a client-focused approach to empower hospitals, clinics, and diagnostic centers. </p>
                        <p class='fs-5 tjustify mt-2' data-aos="fade-up">We specialize in a wide array of services including hospital planning, healthcare accreditation support, fire and electrical safety audits, healthcare staff training, and operational management consultancy. Our goal is to help healthcare institutions achieve clinical excellence, infrastructure compliance, operational efficiency, and quality certifications with ease and confidence. </p>

                    </div>
                </div>
                <div class='col-md-6'>
                    <div class='p-3'>
                        <img class='rounded-4' data-aos="zoom-in" src={require('../image/about.png')} style={{ width: '100%' }} alt="" />
                    </div>
                </div>
            </div> */}
            <div class='col-11 m-auto'>
                <div class='col-11 m-auto'>
                    <p class='fs-5 tjustify mt-5' data-aos="fade-up"><b>ARV Services & Consultant</b> is a professionally managed organization committed to delivering exceptional consultancy and auditing services tailored specifically for the healthcare sector. Founded by a team of highly qualified experts, ARV brings deep-rooted knowledge, industry best practices, and a client-focused approach to empower hospitals, clinics, and diagnostic centers. </p>
                </div>
            </div>
            <div class='col-11 m-auto row align-items-center mt-3'>
                <div class='col-md-6'>
                    <div class='p-3'>
                        <img class='rounded-4' data-aos="zoom-in" src={require('../image/food2.png')} style={{ width: '100%' }} alt="" />
                    </div>
                </div>
                <div class='col-md-6'>
                    <div class='col-sm-11 m-auto'>
                        <p class='fs-5 tjustify mt-2' data-aos="fade-up">We specialize in a wide array of services including hospital planning, healthcare accreditation support, fire and electrical safety audits, healthcare staff training, and operational management consultancy. Our goal is to help healthcare institutions achieve clinical excellence, infrastructure compliance, operational efficiency, and quality certifications with ease and confidence. </p>
                        <p class='fs-5 tjustify mt-2' data-aos="fade-up"> With a growing presence and a robust portfolio of successfully delivered projects, ARV is on a mission to redefine healthcare consultancy across India and beyond. </p>
                    </div>
                </div>

            </div>

          

            <div class='col-11 row gap-md-0 gap-4 m-auto mt-5'>
                <div class='col-md-6'>
                    <div class='col-sm-11 m-auto  rounded-4 h-100' data-aos="fade-up" style={{ background: '#1A3E1A' }}>
                        <div class='col-11 m-auto text-start lmg'>
                            <br />
                            <p class='fs-1  fw-bold'>Mission</p>
                            <p class='fs-5'>Empower healthcare organizations to achieve excellence in service delivery, safety, and operational effectiveness.</p>
                            <br />
                        </div>
                    </div>
                </div>

                <div class='col-md-6'>
                    <div class='col-sm-11 m-auto  rounded-4 h-100' data-aos="fade-up" style={{ background: '#430606' }}>
                        <div class='col-11 m-auto text-start lmg'>
                            <br />
                            <p class='fs-1  fw-bold'>Vision</p>
                            <p class='fs-5'>To be the most trusted consultancy in healthcare development, improving the quality of care through expert strategies and sustainable practices.</p>
                            <br />
                        </div>
                    </div>
                </div>

            </div>

            <div class='col-10 m-auto mt-5'>
                <p class='fs-1 fw-bold' data-aos="fade-up">Our Core Values</p>

                <div class='row align-items-center justify-content-center mt-4'>
                    {
                        coreValue?.map((el, i) => {
                            return (
                                <div class='col-md-4 col-sm-6 col-11 m-auto mt-4' data-aos="fade-up">
                                    <div class='col-11 m-auto text-start'>
                                        <img src={el?.img} style={{ width: '100%' }} alt="" />
                                        <p class='fs-4 mt-2 fw-semibold'>{el?.title}</p>
                                        <p class=''>{el?.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
              
            </div>

            <SubContact />
        </div >
    )
}

export default AboutUs