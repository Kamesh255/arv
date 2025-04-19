import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const service = [
    {
        img: `${require('../image/food3.png')}`,
        title: "Hospital Planning & Designing",
        text: "We help you build healthcare facilities that are functional, patient-centric, and compliant with healthcare standards.",
        offer: [
            "Master planning and space utilization",
            "Design layouts as per NABH and AERB guidelines",
            "Departmental zoning, patient flow, and infection control planning",
            "HVAC, biomedical waste, and electrical system layouts"
        ]
    },
    {
        img: `${require('../image/food3.png')}`,

        title: "NABH & NABL Accreditation Consultancy",
        text: "Achieving quality accreditations like NABH and NABL can significantly boost patient trust and institutional credibility.",
        offer: [
            "Gap analysis and audit",
            "Policy and SOP documentation",
            "Staff training and mock drills",
            "Assistance during final assessment"
        ]
    },
    {
        img: `${require('../image/food3.png')}`,

        title: "Fire & Electrical Safety Audits",
        text: "Our certified auditors perform detailed inspections to help you meet fire and electrical safety norms.",
        offer: [
            "Comprehensive fire safety audits",
            "Electrical load and circuit assessments",
            "Compliance reports as per NBC and IS standards",
            "Emergency preparedness planning"
        ]
    },
    {
        img: `${require('../image/food3.png')}`,

        title: "Healthcare Staff Training",
        text: "We conduct structured training programs to improve healthcare personnel's skill sets and patient care quality.",
        offer: [
            "Basic Life Support (BLS) & ACLS training",
            "Infection control practices",
            "Biomedical waste management",
            "Emergency response and evacuation drills",
            "Patient communication and customer service"
        ]
    },
    {
        img: `${require('../image/food3.png')}`,

        title: "Biomedical Equipment Planning & Maintenance",
        text: "Proper planning and maintenance of medical equipment ensures better diagnostics, treatment, and patient outcomes.",
        offer: [
            "Equipment planning based on department needs",
            "Vendor coordination and installation support",
            "Preventive maintenance plans",
            "Calibration and inventory control systems"
        ]
    },
    {
        img: `${require('../image/food3.png')}`,

        title: "Hospital Operational Management Consultancy",
        text: "We help streamline hospital operations through efficient processes, staff coordination, and smart resource planning.",
        offer: [
            "Front office, billing, and discharge process optimization",
            "HR and duty roster planning",
            "Pharmacy and inventory audits",
            "Cost optimization strategies",
            "Quality indicators and dashboard development"
        ]
    },
    {
        img: `${require('../image/food3.png')}`,

        title: "Statutory Compliance & Licensing Support",
        text: "We assist healthcare facilities in fulfilling legal and statutory compliance requirements with complete documentation support.",
        offer: [
            "Clinical Establishment Registration",
            "AERB license for radiology units",
            "Pollution control board NOC",
            "Fire NOC and municipal approvals",
            "Biomedical waste and disaster management plans"
        ]
    },
    {
        img: `${require('../image/food3.png')}`,

        title: "Quality Audits & Internal Assessments",
        text: "We provide recurring internal assessments to maintain standards, ensure compliance, and drive continuous improvement.",
        offer: [
            "Departmental audits",
            "Infection control audits",
            "Patient feedback analysis",
            "KPI monitoring and gap closures"
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
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/food2.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                    <p class='display-1 fw-bold text-white' data-aos="zoom-in">Serv<span class='text-success'>i</span>ces</p>
                </div>
            </div>

            <div class='col-sm-11 col-10 m-auto mt-3'>
                <p class='fs-1 fw-bold' data-aos="fade-up">Our Services</p>
                <p class='fs-5 tjustify' data-aos="fade-up">At <b>ARV Services & Consultant,</b> we offer a wide spectrum of consultancy and auditing services exclusively designed for the healthcare sector. Our solutions are aimed at improving the quality, safety, and efficiency of hospitals, clinics, and diagnostic centers through strategic guidance, regulatory compliance, and hands-on support.</p>

                {
                    service?.map((el) => {
                        return (
                            <div class='mt-4 bgdmg rounded-4 row flex-column-reverse flex-md-row align-items-center' data-aos="fade-up">
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
                }
            </div>
            <SubContact />
        </div>
    )
}

export default Services