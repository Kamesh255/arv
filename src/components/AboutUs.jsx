import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
import { Helmet } from 'react-helmet';
import Gall from './Gall';

const gallery1 = [
    { src: `${require('../image/arv3.jpg')}` },
    { src: `${require('../image/arv9.jpg')}` },

    { src: `${require('../image/arv21.jpg')}` },
    { src: `${require('../image/arv23.jpg')}` },
    { src: `${require('../image/arv25.jpg')}` },
    { src: `${require('../image/gg1.jpg')}` },
    { src: `${require('../image/gg2.jpg')}` },


]


// const coreValue = [
//     {
//         title: "Integrity",
//         text: "We operate with honesty, transparency, and fairness in everything we do.",
//         img: `${require('../image/integrity.png')}`
//     }, {
//         title: "Excellence",
//         text: "We strive to exceed expectations through quality-driven processes and continuous improvement.",
//         img: `${require('../image/exellent.png')}`
//     },
//     {
//         title: "Innovation",
//         text: "We bring creative and practical solutions to complex challenges.",
//         img: `${require('../image/inovation.png')}`
//     },
//     {
//         title: "Collaboration",
//         text: "We work hand-in-hand with healthcare teams to co-create better outcomes.",
//         img: `${require('../image/collaboration.png')}`
//     },
//     {
//         title: "Commitment",
//         text: "We are deeply invested in our client’s success and healthcare transformation.",
//         img: `${require('../image/commitment.png')}`
//     }
// ]
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
            {/* <div style={{ height: '100vh', backgroundImage: `url(${require('../image/food3.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                    <p class='display-1 fw-bold text-white' data-aos="zoom-in">Abou<span class='text-success'>t</span> Us</p>
                </div>
            </div> */}
            <div class='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
                <div>
                    <br />
                    <br /><br />
                    <div class='col-11 m-auto '>
                        <img style={{ width: '100%' }} src={require('../image/arvLogo.png')} data-aos="zoom-in" alt="" />
                    </div>
                </div>
            </div>


            <div class='col-11 m-auto'>
                <div class='col-11 m-auto'>
                </div>
            </div>
            <div class='col-11 m-auto row align-items-center mt-3'>
                <div class='col-md-6'>
                    <div class='p-3'>
                        <img class='rounded-4' data-aos="zoom-in" src={require('../image/about.jpg')} style={{ width: '100%' }} alt="" />
                    </div>
                </div>
                <div class='col-md-6'>
                    <div class='col-sm-11 m-auto'>
                        <p class='fs-5 tjustify ' data-aos="fade-up"><b>ARV Services & Consultant</b> is a professionally managed organization committed to delivering exceptional consultancy and auditing services tailored specifically for the healthcare sector. Founded by a team of highly qualified experts, ARV brings deep-rooted knowledge, industry best practices, and a client-focused approach to empower hospitals, clinics, and diagnostic centers. </p>
                        <p class='fs-5 tjustify mt-2' data-aos="fade-up">We specialize in a wide array of services including hospital planning, healthcare accreditation support, fire and electrical safety audits, healthcare staff training, and operational management consultancy. Our goal is to help healthcare institutions achieve clinical excellence, infrastructure compliance, operational efficiency, and quality certifications with ease and confidence. </p>
                        <p class='fs-5 tjustify mt-2' data-aos="fade-up"> With a growing presence and a robust portfolio of successfully delivered projects, ARV is on a mission to redefine healthcare consultancy across India and beyond. </p>
                    </div>
                </div>

            </div>

            <div class='mt-3 '>
                <div class='col-11 m-auto mt-3 row align-items-end '>
                    <div class='col-xl-4 col-lg-5   p-0' style={{ height: '100%' }}>
                        <div class='col-sm-10 m-auto mt-5 position-relative h-100 '>
                            <img src={require('../image/rakesh.jpg')} data-aos="fade-in" style={{ width: '100%' }} alt="" />
                            <div class=''></div>
                        </div>
                    </div>
                    <div class='col-xl-8 col-lg-7'>
                        <div class='col-11 m-auto text-start' data-aos="fade-in" >
                            <p class='fs-4 fw-bold' >Message</p>
                            <p class='mt-2 tjustify'>At <b>ARV Services & Consultant</b>, our mission is to empower Food Business Operators with the knowledge and tools to achieve excellence in food safety, hygiene, and compliance.</p>
                            <p class='mt-2 tjustify'>From our base in Seoni to our branches across Central India, we’ve been committed to delivering customized, practical solutions that help organizations meet both national and global food safety standards. Whether it's implementing FSMS, ensuring FSSAI compliance, or providing skill-focused training, we strive to support our clients at every step.</p>
                            <p class='mt-2 tjustify'>Our experienced team is dedicated to building a safer, more reliable food industry. Together, we aim to raise the bar for food quality and consumer safety.</p>
                            <div class='text-end'>
                                <p class='fw-bold'>Warm regards,</p>
                                <p class='fs-4 fw-bold'>Rakesh Choubey</p>
                                <p class='fw-bold'>General Manager, ARV Services & Consultant</p>
                            </div>

                            <br /> <br />
                        </div>
                    </div>


                </div>
            </div>

            <div class='col-11 m-auto mt-5'>
                <p class='fs-1 fw-bold'>Our Team</p>
                <p>Our team comprises seasoned professionals with extensive experience in food safety and consultancy. We
                    collaborate with a network of qualified trainers, consultants, and auditors dedicated to upholding the
                    highest standards in the food industry. Our experts stay abreast of the latest developments in food safety
                    regulations and best practices, ensuring our clients receive current and relevant guidance. </p>
            </div>



            <div class='col-11 row gap-md-0 gap-4 m-auto mt-5'>
                <div class='col-md-6'>
                    <div class='col-sm-11 m-auto  rounded-4 h-100' data-aos="fade-up" style={{ background: '#1A3E1A' }}>
                        <div class='col-11 m-auto text-start lmg'>
                            <br />
                            <p class='fs-1  fw-bold'>Mission</p>
                            <p class='fs-5'>To deliver innovative solutions and training that enhance food safety practices, ensuring compliance and fostering a culture of continuous improvement within the food industry.</p>
                            <br />
                        </div>
                    </div>
                </div>

                <div class='col-md-6'>
                    <div class='col-sm-11 m-auto  rounded-4 h-100' data-aos="fade-up" style={{ background: '#430606' }}>
                        <div class='col-11 m-auto text-start lmg'>
                            <br />
                            <p class='fs-1  fw-bold'>Vision</p>
                            <p class='fs-5'>To be the trusted partner for Food Business Operators, driving excellence in food safety and contributing to a safer global food supply chain. </p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>

            <div class='col-11 row gap-md-0 gap-4 m-auto mt-5'>
                <div class='col-md-6'>
                    <div class='col-sm-11 m-auto  rounded-4 h-100' data-aos="fade-up" style={{ background: '#430606' }}>
                        <div class='col-11 m-auto text-start lmg'>
                            <br />
                            <p class='fs-1  fw-bold'>Strength</p>
                            <p class='fs-5'>The professionally qualified team designs the Food Safety Training Courses and HACCP Implementation procedures and documentation. Practical approach, professionalism, Food Industry experience and knowledge are our real resources / assets which includes former food safety enforcement officials and industry experts.</p>
                            <br />
                        </div>
                    </div>
                </div>

                <div class='col-md-6'>
                    <div class='col-sm-11 m-auto  rounded-4 h-100' data-aos="fade-up" style={{ background: '#1A3E1A' }}>
                        <div class='col-11 m-auto text-start lmg'>
                            <br />
                            <p class='fs-1  fw-bold'>Visible</p>
                            <p class='fs-5'>As a professional, training and consultancy company body at the forefront food safety, the FHEMS needs to be visible in all our fields of operation. We need the work we do to be noticed and recognized.</p>
                            <br />
                        </div>
                    </div>
                </div>

            </div>
            <div class='col-11 m-auto mt-5'>
                <p class='display-2 fw-bold'>Gallery</p>
            </div>

            <Gall gallery={gallery1} />
            {/* 
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

            </div> */}

            <SubContact />
        </div >
    )
}

export default AboutUs