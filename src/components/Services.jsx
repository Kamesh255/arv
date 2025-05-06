import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const service = [
    {
        title: "Food Safety Management Systems (FSMS) Implementation ",
        text: "We offer expert guidance in implementing globally recognized FSMS standards, including: ",
        offer: [
            "<p><b>ISO 22000: </b> A comprehensive standard integrating the principles of Hazard Analysis and Critical Control Points (HACCP) and prerequisite programs (PRPs). </p>",
            "<p><b>FSSC 22000: </b> A GFSI-recognized certification scheme for food safety management systems, applicable to organizations in the food chain. </p>",
            "<p><b>HACCP: </b> A systematic preventive approach to food safety, addressing physical, chemical, and biological hazards. </p>",
            "<p><b>BRC: </b>A globally recognized standard for food safety, ensuring product integrity, legality, and quality. </p>",
        ]
    },
    {
        title: "Regulatory Compliance ",
        text: "Navigating the complex landscape of food safety regulations can be challenging. We provide comprehensive support to ensure your operations comply with national and international regulations, including: ",
        offer: [
            "<p><b>FSSAI Compliance: </b> Assistance with Food Safety and Standards Authority of India regulations, including licensing, product approvals, and labeling requirements.</p>",
            "<p><b>Global Export Standards: </b>Guidance on meeting the food safety requirements of international markets, facilitating smooth export processes. </p>",
        ]
    },
    {
        title: "Customized Training Programs ",
        text: "We design and deliver tailored training programs to meet the specific needs of your organization, covering areas such as: ",
        offer: [
            "<p><b>Good Manufacturing Practices (GMP): </b> Training on the principles and practices that ensure products are consistently produced and controlled according to quality standards.</p>",
            "<p><b>Good Hygiene Practices (GHP): </b> Instruction on maintaining cleanliness and hygiene throughout the food production process. </p>",
            "<p><b>Internal Auditing: </b> Equipping your team with the skills to conduct effective internal audits, ensuring ongoing compliance and continuous improvement.</p>",
            "<p><b>Pest Control Management: </b> Strategies for effective pest management to prevent contamination and ensure food safety. </p>",
            "<p><b>Food Safety Culture: </b> Fostering a culture that prioritizes food safety at every level of your organization. </p>",
        ]
    },
    {
        title: "Soft Skills Development",
        text: "Recognizing the importance of holistic development, we offer programs focusing on personal and professional growth, including: ",
        offer: [
            "<p><b>Management Training: </b> Developing leadership skills to effectively manage teams and operations.</p>",
            "<p><b>Role-Based Competency Building: </b> Enhancing the specific skills required for various roles within your organization. </p>",
        ]
    },
    {
        title: "Food Test Report ",
        text: "We facilitate expert consultation for food testing and analysis, ensuring your products meet safety and quality standards through certified laboratories. Our services include:",
        offer: [
            "<p><b>Sample Collection Guidance: </b> Assistance with proper food sample collection methods to ensure test accuracy.</p>",
            "<p><b>Lab Coordination: </b> End-to-end support in submitting samples to certified laboratories for microbiological, chemical, and nutritional analysis.</p>",
            "<p><b>Report Interpretation: </b> Expert review and explanation of test results to identify compliance gaps and corrective actions.</p>"
        ]
    },
    {
        title: "Water Test Report ",
        text: "We provide professional guidance for testing potable and process water to ensure safety, compliance, and suitability for food production environments.",
        offer: [
            "<p><b>Sample Collection Support: </b> Instructions for collecting water samples under hygienic and standardized procedures.</p>",
            "<p><b>Lab Testing Facilitation: </b> Coordination with accredited laboratories for physical, chemical, and microbiological analysis of water samples.</p>",
            "<p><b>Expert Analysis & Recommendations: </b> Detailed review of lab reports with actionable recommendations for improvement.</p>"
        ]
    }
];



const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const navigate = useNavigate()
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Services -  ARV Services & Consultant</title>
                <meta name="description" content=" ARV Services & Consultant" />
                <meta name="keywords" content=" ARV Services & Consultant" />
            </Helmet>
            <div class='row col-12'>
                <div class='col-lg-5 col-md-6'>
                    <img src={require('../image/serv.jpg')} style={{width:'100%',height:'100%'}} alt="" />
                </div>
                <div class='col-lg-7 col-md-6'>
                   <div className='col-11 m-auto text-start'>
                   <p class='fs-1 fw-bold' data-aos="fade-up">Our Services</p>
                   <p class='fs-5 tjustify' data-aos="fade-up">At <b>ARV Services & Consultant,</b> we offer a wide spectrum of consultancy and auditing services exclusively designed for the healthcare sector. Our solutions are aimed at improving the quality, safety, and efficiency of hospitals, clinics, and diagnostic centers through strategic guidance, regulatory compliance, and hands-on support.</p>
                   <p class='fs-1 fw-bold mt-3' data-aos="fade-up">Our Philosophy</p>
                   <p class='fs-5 tjustify' data-aos="fade-up">We believe that <b>food safety is not just a regulatory requirement—but a responsibility</b>. we offer a wide spectrum of consultancy and auditing services exclusively designed for the healthcare sector. Our solutions are aimed at improving the quality, safety, and efficiency of hospitals, clinics, and diagnostic centers through strategic guidance, regulatory compliance, and hands-on supportOur approach combines deep technical expertise with practical strategies to help businesses achieve and maintain high standards of safety and quality.</p>
                   </div>
                </div>
            </div>
            {/* <div style={{ height: '100vh', backgroundImage: `url(${require('../image/food2.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                    <p class='display-1 fw-bold text-white' data-aos="zoom-in">Serv<span class='text-success'>i</span>ces</p>
                </div>
            </div> */}

            <div class='col-11 m-auto mt-3'>
                {/* <p class='fs-1 fw-bold' data-aos="fade-up">Our Services</p> */}
                {/* <p class='fs-5 tjustify' data-aos="fade-up">At <b>ARV Services & Consultant,</b> we offer a wide spectrum of consultancy and auditing services exclusively designed for the healthcare sector. Our solutions are aimed at improving the quality, safety, and efficiency of hospitals, clinics, and diagnostic centers through strategic guidance, regulatory compliance, and hands-on support.</p> */}

                {/* {
                    service?.map((el) => {
                        return (
                            <div class='mt-4 bgdmg rounded-4 row flex-column-reverse flex-md-row align-items-center' >
                                <div class='col-md-6 '>
                                    <div class='col-11 m-auto lmg text-start'>
                                        <br />
                                        <p class='fs-2 fw-bold '>{el?.title}</p>
                                        <p class='fs-5 mt-2'>{el?.text}</p>
                                        <b class='fs-5 fw-bold'>What we offer:</b>
                                        <ul>
                                            {el?.offer?.map((item, i) => {
                                                return (
                                                    <li class='fs-5 mt-2' key={i}>{item}</li>
                                                )
                                            })
                                            }
                                        </ul>
                                        <button class='btn btn-outline-light rounded-5 my-3' onClick={() => navigate('/real-estate')}>Know More</button>
                                        <br />
                                    </div>
                                </div>
                                <div class='col-md-6'>
                                    <div class='p-3'>
                                        <img src={require('../image/food3.png')} style={{ width: '100%' }} class='rounded-4' alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                } */}


                {
                    service?.map((el, i) => {
                        return (

                            <div class='col-12 bgdmg text-start lmg p-2 mt-3 rounded-2' data-bs-toggle="collapse" href={`#servise${i}`} role="button" aria-expanded="false" aria-controls={`servise${i}`} data-aos="fade-up">
                                <div class='d-flex align-items-center justify-content-between'>

                                    <p class='fs-5 fw-bold'>{el?.title}</p>
                                    <p><i class="bi bi-caret-down-fill"></i></p>
                                </div>
                                <div class="collapse" id={`servise${i}`}>
                                    <div class="p-2">
                                       <p class='fs-5'> {el?.text}</p>
                                       <ul>
                                        {el?.offer?.map((item, i) => {
                                            return (
                                                <li class=' mt-2' key={i} dangerouslySetInnerHTML={{ __html:item }}></li>
                                            )
                                        })}
                                       </ul>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <SubContact />
        </div>
    )
}

export default Services