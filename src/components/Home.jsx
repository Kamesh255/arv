import React, { useEffect } from 'react'
 
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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


const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])

  const navigate = useNavigate()
  return (
    <div>
      <Helmet> 
      <meta charSet="utf-8" />
        <title> ARV Services & Consultant</title>
        <meta name="description" content=" ARV Services & Consultant" />
        <meta name="keywords" content=" ARV Services & Consultant" />
      </Helmet>
      <div class='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
        <div>
          <br />
          <br /><br />
          <div class='col-11 m-auto '>
            <img style={{ width: '100%' }} src={require('../image/arvLogo.png')} data-aos="zoom-in" alt="" />
          </div>
        </div>
      </div>

      <div class='col-11 m-auto row align-items-center mt-5 gap-md-0 gap-4'>
        <div class='col-md-6'>
          <div class='col-11 m-auto text-start'>
            <p class='fw-semibold fs-1 ' data-aos="fade-up">Empowering Healthcare Excellence & Management Solutions</p>
            <p data-aos="fade-up">Welcome to <b>ARV Services & Consultant</b>, a trusted name in delivering comprehensive healthcare consultancy. We specialize in hospital planning, quality accreditation, fire safety audits, healthcare staff training, and other vital services to elevate the standards of healthcare delivery.</p>
            <button class='btn btn-outline-dark rounded-5 mt-3' data-aos="fade-up" onClick={()=>navigate('/about-us')} >Know More</button>

          </div>
        </div>
        <div class='col-md-6'>
          <img class='rounded-4' data-aos="fade-in" src={require('../image/food2.png')} style={{ width: '100%' }} alt="" />
        </div>
      </div>

      <div id="carouselExampleAutoplaying" class="carousel slide mt-5" data-aos="zoom-in-up" data-bs-ride="carousel">

        <div class="carousel-inner">
          {
            slider?.map((el, i) => {
              return (
                <div style={{ height: '100vh', backgroundImage: `url(${el?.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} class={i == [0] ? `carousel-item active` : 'carousel-item'}>
                  <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                    <div class='col-lg-8 col-11 m-auto'>
                      <p class='display-1 lmg fw-bold'>{el?.title}</p>
                      <p class='fs-5 lmg'>{el?.text}</p>
                      <button class='btn btn-outline-light mt-4 fw-bold rounded-5' onClick={() => navigate('/services')}>Know More</button>

                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class='col-11 m-auto bgdmg rounded-4 row  mt-5  flex-column-reverse flex-md-row'>
        <div class='col-md-6'>
          <div class='col-11 m-auto text-start'>
            <br />
            <p class='lmg fs-1 fw-semibold' data-aos="fade-up">
              Why Choose <span style={{ color: 'gold' }}>ARV</span> Services?
            </p>
            <ul class='lmg fs-5'>
              <li class='mt-2' data-aos="fade-up"><b>Multi-disciplinary Expertise:</b>Our team includes professionals from hospital administration, biomedical engineering, safety compliance, architecture, and healthcare quality.</li>
              <li class='mt-2' data-aos="fade-up"><b>Tailored Solutions:</b>We do not offer one-size-fits-all plans. Our solutions are customized to the specific needs of your facility.</li>
              <li class='mt-2' data-aos="fade-up"><b>Proven Track Record:</b>Successfully served multiple hospitals and clinics across various cities with measurable outcomes.</li>
              <li class='mt-2' data-aos="fade-up"><b>End-to-End Support:</b>From documentation and training to inspections and post-accreditation monitoring, we’re with you every step of the way.</li>
              <li class='mt-2' data-aos="fade-up"><b> Compliance Assurance:</b> We help institutions meet NABH, NABL, ISO, and local regulatory guidelines with confidence.</li>
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
    </div>

  )
}

export default Home