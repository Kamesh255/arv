import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const HomeTop = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 990 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 990, min: 660 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 660, min: 420 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 420, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      arrows={true}
      autoPlaySpeed={5000}
      showDots={true}
    >
      {data?.map((el) => {
        return (
          <div class="">
            {el}
          </div>
        )
      })}
    </Carousel>
  );
}


const slider = [
  {
    image: `${require('../image/food2.png')}`,
    title: "Hospital Planning & Designing",
    text: "Strategic infrastructure and architectural planning to optimize patient care and efficiency."
  },
  {
    image: `${require('../image/food2.png')}`,
    title: "NABH & NABL Accreditation Support",
    text: "End-to-end guidance and support for achieving national and international quality standards."
  },
  {
    image: `${require('../image/food2.png')}`,
    title: "Fire Safety Audits & Compliance",
    text: "Ensuring fire safety preparedness and legal compliance for healthcare facilities"
  },
  {
    image: `${require('../image/food2.png')}`,
    title: "Healthcare Staff Training",
    text: "Skill-based training programs for clinical and non-clinical staff."
  },
  {
    image: `${require('../image/food2.png')}`,
    title: "Operational Management Consultancy",
    text: "Performance improvement and cost-effective hospital operations strategies."
  },
]

const homeTopslider = [
  { img: `${require('../image/h1.jpg')}` },
  { img: `${require('../image/arv1.jpg')}` },
  { img: `${require('../image/arv2.jpg')}` },
  { img: `${require('../image/h2.jpg')}` },
  { img: `${require('../image/arv3.jpg')}` },
  { img: `${require('../image/arv4.jpg')}` },
  { img: `${require('../image/h3.jpg')}` },

]


const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])

  const homeTopSliderLarge =
    homeTopslider?.map((el, i) => {
      return (
        <div style={{ width: '100%' }} >
          <img src={el?.img} style={{ width: '100%' }} alt="" />
        </div>
      )
    })



  const navigate = useNavigate()
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title> ARV Services & Consultant</title>
        <meta name="description" content=" ARV Services & Consultant" />
        <meta name="keywords" content=" ARV Services & Consultant" />
      </Helmet>
      {/* <div class='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
        <div>
          <br />
          <br /><br />
          <div class='col-11 m-auto '>
            <img style={{ width: '100%' }} src={require('../image/arvLogo.png')} data-aos="zoom-in" alt="" />
          </div>
        </div>
      </div> */}
      <div>
        {<HomeTop data={homeTopSliderLarge} />}
      </div>

      <div class='col-11 m-auto row align-items-center mt-5 gap-md-0 gap-4'>
        <div class='col-md-6'>
          <div class=' m-auto text-start'>
            <p class='fw-semibold fs-1 ' data-aos="fade-up">Empowering You with Expert Food Safety Training</p>
            <p class='mt-2' data-aos="fade-up">Established in Seoni, Madhya Pradesh,  <b> ARV Services & Consultant,</b>is a premier firm specializing in comprehensive food safety training and consultancy services. Our mission is to empower Food Business Operators (FBOs) with the knowledge and tools necessary to uphold the highest standards of food safety, hygiene, and quality, ensuring consumer well-being and regulatory compliance. .</p>
            {/* <p data-aos="fade-up mt-4">Located in <b>Seoni, Madhya Pradesh, ARV Services & Consultant</b> is a leading provider of <b> food safety training and consultancy services</b>. We are committed to empowering <b>Food Business Operators (FBOs)</b>  with the tools, training, and systems necessary to ensure <b>compliance, hygiene, and top-quality standards</b> .</p> */}

            {/* <p data-aos="fade-up" class='mt-1'>With a presence in <b> Chhindwara and Nagpur</b>, we offer pan-India consultancy with global relevance.</p> */}
            {/* <p data-aos="fade-up">Welcome to <b>ARV Services & Consultant</b>, a trusted name in delivering comprehensive healthcare consultancy. We specialize in hospital planning, quality accreditation, fire safety audits, healthcare staff training, and other vital services to elevate the standards of healthcare delivery.</p> */}
            <button class='btn btn-outline-dark rounded-5 mt-3' data-aos="fade-up" onClick={() => navigate('/about-us')} >Know More</button>

          </div>
        </div>
        <div class='col-md-6'>
          <img class='rounded-4' data-aos="fade-in" src={require('../image/ha.jpg')} style={{ width: '100%' }} alt="" />
        </div>
      </div>
      {/* <div class='col-11 m-auto mt-5 '>
        <p class='tjustify'>FHEMS is an establishment for Food Safety Training and Consultancy Services . Our head office is in India. We also have branch offices in Kuwait, Dubai, Qatar and Oman.We launched our business in the year of 2015 with an ambitious vision and focus on Training and Consultancy in Food Safety Management System(FSMS). We are operated by qualified and competent professionals with dedication and commitment to achieve its vision. We are ensuring our dedicated serving to the valuable customers in the Middle East, and other part of the world. We ensures to keep abreast of the changes happening in Food Safety scenario and registered with International awarding bodies HABC(UK),CIEH(UK),NEHA(US),EHA(AU)</p>
      </div> */}


      <div class='col-11 m-auto bgdmg rounded-4 row  mt-5  flex-column-reverse flex-md-row'>
        <div class='col-md-6'>
          <div class='col-11 m-auto text-start'>
            <br />
            <p class='lmg fs-1 fw-semibold' data-aos="fade-up">
              Why Choose <span style={{ color: 'gold' }}>ARV</span> Services?
            </p>
            <ul class='lmg fs-5'>
              <li class='mt-2' data-aos="fade-up"><b>Customized Solutions:</b> We understand that each organization is unique. Our services are tailored to meet your specific needs and challenges. </li>
              <li class='mt-2' data-aos="fade-up"><b>Expertise:</b> With a team of experienced professionals, we bring in-depth knowledge and practical insights to our consultancy and training services.</li>
              <li class='mt-2' data-aos="fade-up"><b>Commitment to Excellence:</b> We are dedicated to delivering high-quality services that exceed client expectations and contribute to their success. </li>
              <li class='mt-2' data-aos="fade-up"><b>Continuous Support:</b> Our relationship with clients extends beyond project completion. We offer ongoing support to ensure sustained compliance and continuous improvement. </li>
            </ul>
            <button data-aos="fade-up" class='btn  btn-outline-light rounded-5' onClick={() => navigate('/about-us')}>Know More</button>
            <br /><br />
          </div>
        </div>
        <div class='col-md-6 p-0'>
          <div class='p-sm-5 p-3'>
            <img class='rounded-4' data-aos="fade-in" src={require('../image/why.jpg')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
          </div>
        </div>
      </div>
      {/* 
      <div class='mt-3'>
        <p class=' display-4 fw-bold' data-aos="fade-down">Our Partner</p>

        <div class="ourPartner-container mt-4">
          <div class='ourPartner-marquee'>
            {ourPartner?.map((el) => {
              return (
                <>
                  <span style={{ marginLeft: "80px", marginRight: "10px" }}>
                    <img class='ourPartner' src={el} style={{ height: '50px' }} alt="" />
                  </span>
                </>
              );
            })}
          </div>
        </div>
      </div> */}
      <br />
      <SubContact />
    </div >

  )
}

export default Home