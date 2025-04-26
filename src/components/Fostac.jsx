import React from 'react'
import SubContact from './SubContact';

const fostacCourses = [
    {
        sno: 1,
        course: "Level 2 (Manufacturing)- Food Safety Supervisor",
        duration: "8 hours per day",
        type: "Mandatory",
        applicableFor: "All Food processing units other than milk and milk product processing units and health supplements and nutraceuticals."
    },
    {
        sno: 2,
        course: "Level 1 (Manufacturing) – Food Safety Supervisor",
        duration: "4 hours per day",
        type: "Recommended",
        applicableFor: "For all types of small manufacturing units."
    },
    {
        sno: 3,
        course: "Milk and Milk Product- Food Safety Supervisor",
        duration: "12 hours per day",
        type: "Mandatory",
        applicableFor: "Food processing units – milk and milk products."
    },
    {
        sno: 4,
        course: "Meats and Poultry- Food safety supervisor",
        duration: "12 hours per day",
        type: "Mandatory",
        applicableFor: "Food processing units – Meats and poultry, excluding small slaughterhouses."
    },
    {
        sno: 5,
        course: "Fish and Seafood- Food Safety Supervisor",
        duration: "8 hours per day",
        type: "Mandatory",
        applicableFor: "Food processing units – Fish and other seafood"
    },
    {
        sno: 6,
        course: "Health Supplements- Food Safety Supervisor",
        duration: "8 hours per day",
        type: "Mandatory",
        applicableFor: "Food processing units – Health Supplements and Nutraceuticals."
    },
    {
        sno: 7,
        course: "Level 2 (Bakery) – Food Safety Supervisor",
        duration: "8 hours per day",
        type: "Optional",
        applicableFor: "Food processing units – Bakery"
    },
    {
        sno: 8,
        course: "Level 1 (Bakery) – Food Safety Supervisor",
        duration: "4 hours per day",
        type: "Recommended",
        applicableFor: "Small Scale Food processing units – Bakery"
    },
    {
        sno: 9,
        course: "Edible oil and Fats- Food Safety Supervisor",
        duration: "8 hours per day",
        type: "Optional",
        applicableFor: "Food processing units – Vegetable oil and fats"
    },
    {
        sno: 10,
        course: "Water and water-based beverages – Food Safety Supervisor",
        duration: "8 hours per day",
        type: "Optional",
        applicableFor: "Food processing units – Water and water-based beverages"
    },
    {
        sno: 11,
        course: "Level 2 (Retail) – Food Safety Supervisor",
        duration: "8 hours per day",
        type: "Mandatory",
        applicableFor: "Retailers and Wholesalers"
    },
    {
        sno: 12,
        course: "Level 1(Retail and Distribution) – Food Safety Supervisor",
        duration: "8 hours per day",
        type: "Recommended",
        applicableFor: "For all type of small retail shop"
    },
    {
        sno: 13,
        course: "Level 2 (Storage and Transport) – Food Safety Supervisor",
        duration: "8 hours per day",
        type: "Mandatory",
        applicableFor: "Food storage and transporters"
    }
];


const Fostac = () => {
    return (
        <div>
            <div class='col-11 m-auto'>
                <p class='display-2 fw-bold'>FOSTAC</p>
                <p class='tjustify mt-1'>FOSTAC or Food Safety Training and Certification is a training programme of Food Safety & Standard Authority of India (FSSAI) initiated with the object of raising awareness on Food Safety & Standards among the food business operators. As per the provisions under FSSAI Act, it is mandatory for all the food business operators to have trained and certified an individual in their business premises to ensure food safety. In this article, we look at the Food Safety Training and Certification (FOSTAC) in detail.</p>
            </div>
            <div class='col-11 m-auto text-start'>
                <p class='fs-1 fw-bold'>Objective</p>
                <p>The objectives of the FOSTAC are listed below:</p>
                <ul>
                    <li>To bring behavioural change and inculcating a culture of food safety across the country.</li>
                    <li> To create an improved environment of self-compliance to food safety and standards.</li>
                </ul>
                <p class='fs-1 fw-bold'>Eligibility Criteria for Trainees</p>
                <p>Any individual who satisfies the following eligibility criteria can apply for the course under FSSAI.</p>

                <p class='fs-5 fw-bold'>Basic Level Course</p>
                <ul>
                    <li> If the individual is working in the food business, then the six months of experience in the relevant sector (depending upon the course selected) is required.</li>
                    <li> Any students pursuing a final year of under graduation in nutrition, hospitality, food science or other allied fields is also eligible to apply for this basic level course.</li>
                </ul>

                <p class='fs-5 fw-bold'>Advanced Level Course</p>
                <ul>
                    <li>Any Graduates in science with one year of experience in a supervisory role in the relevant sector is eligible to apply for the advanced level course.</li>
                    <li> Any Graduates in non-science discipline with two years of experience in a supervisory role in the relevant sector can attend the advanced level.</li>
                    <li>Any students pursuing a final year of under graduation in nutrition, hospitality, food science or other allied fields is also eligible to apply for this advanced-level course.</li>
                </ul>

                <p class='fs-5 fw-bold'>Special Courses</p>
                <ul>
                    <li> Any Graduates in science with one year of experience in a supervisory role in the relevant sector is eligible to apply for the special course.</li>
                    <li>Any Graduates in non-science discipline with two years of experience in a supervisory role in the particular sector can attend the special course.</li>
                </ul>

                <p class='fs-1 fw-bold'>Food Safety Courses</p>
                <p>FOSTAC offers seventeen different types of courses suits for different types of food business on different competency level. The training for the food safety supervisors would be conducted at the basic, advanced and special courses through the face to face mode. Also, FSSAI has created training content for the courses and the same is available in English and is being translated in other regional languages.</p>
                <p class='fs-1 fw-bold'>FOSTAC-Food Safety Course</p>
                <div class='d-flex justify-content-center align-items-center flex-column'>

                    <img class='m-auto col-lg-6 col-11' src={require('../image/aa.jpg')} alt="" />
                </div>
                <p class='fs-1 fw-bold'>Details of FOSTAC Courses</p>
                <p>The details of the FOSTAC Courses are tabulated below for the trainees:</p>
                <div style={{ width: '100%', overflowX: 'auto' }}>
                    <table class="table table-success table-striped table-bordered">
                        <thead>
                            <tr>
                                <th class='text-nowrap' scope="col">S.No.</th>
                                <th class='text-nowrap' scope="col">FOSTAC Courses</th>
                                <th class='text-nowrap' scope="col">Duration</th>
                                <th class='text-nowrap' scope="col">Mandatory/Optional</th>
                                <th class='text-nowrap' scope="col">Kind of Business for which applicable</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fostacCourses.map((course) => (
                                <tr key={course.sno}>
                                    <th scope="row">{course.sno}</th>
                                    <td>{course.course}</td>
                                    <td>{course.duration}</td>
                                    <td>{course.type}</td>
                                    <td>{course.applicableFor}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                <p class='fs-1 fw-bold'>Responsibility of Training Partner</p>
                <p>The following are the responsibilities of the training partner:</p>
                <ul>
                    <li> Registration through FOSTAC portal as a training partner.</li>
                    <li>Identification of trainer as per eligibility criteria and organising Training of Trainer Programme (TOT) in partnership with FSSAI.</li>
                    <li> Mobilisation of trainees</li>
                    <li>Provision of the training centre with adequate infrastructure.</li>
                    <li>Upload calendar and venture details in the portal.</li>
                    <li> Evaluation and uploading of the result in the portal for the generation of the certificate.</li>
                </ul>

                <p class='fs-1 fw-bold'>Eligibility Criteria</p>
                <p class='fs-5 fw-bold'>General Criteria</p>
                <p>Any Organization have been in existence for at least one year on the date of the application is eligible to apply as a training partner.</p>

                <p class='fs-1 fw-bold'>Specific Criteria</p>
                <p class='fs-5 fw-bold'>Association</p>
                <p>Any professional, trade and scientific associations in the food sector at regional, state and national level with a membership of at least 100 members.</p>


                <p class='fs-5 fw-bold'>Licensed Food Business</p>
                <ul>
                    <li>Any Food Business Operators (FBO) holding FSSAI licence and having annual turn over of Rs.150 crore can be the training partner for the training of FBO.</li>
                    <li>Academic & Vocational Institutes</li>
                    <li> Any recognised colleges, universities, management institutes, technical universities and other academic intuitions.</li>
                    <li> Partners approved by Government and skill councils</li>
                    <li> Partners approved by skill council, NSDC and other Central or State Government.</li>
                </ul>

                <p class='fs-5 fw-bold'>Other Training Agencies</p>
                <p>At least three years experience at the international and national level in training on food safety or nutrition.</p>
                <p class='fs-1 fw-bold'>Application Procedure</p>
                <p>To register for the FOSTAC programme under FSSAI, follow the steps mentioned below:</p>

                <p class='fs-1 fw-bold'>Trainee</p>
                <p>Step 1: The trainee interested in participating under FOSTAC programme can register through the official portal of FOSTAC.</p>
                <p>Step 2: Click on the “Register” button to fill the trainee registration form with the necessary details.</p>

                <p class='fs-1 fw-bold'>FOSTAC-Trainee Registration</p>
                <img src={require('../image/FOSTAC2.png')} style={{ width: '100%' }} alt="" />
                <p>Step 3: After filling the registration form, click on the “Verify” button to submit your details.</p>
                <p class='fs-1 fw-bold'>FOSTAC-Trainee Application Form</p>
                <img src={require('../image/fostac3.png')} style={{ width: '100%' }} alt="" />

                <p>Step 4: Then, the trainee can enrol themselves in the desired course and generate admit card to attend classroom training as per the schedule, if eligible. Note: On completion of training, the qualified trainer can download their certificate by submitting the feedback on the same portal.</p>
                <p class='fs-1 fw-bold'>Training Partner</p>
                <p>Step 1: The applicant has to check with the eligibility criteria before applying for the training partner.</p>
                <p>Step 2: The eligible training partner has to fill the prescribed application form, which is available on the portal.</p>
                <p class='fs-1 fw-bold'>FOSTAG-Training Partner Application Form</p>
                <img src={require('../image/fostac4.png')} style={{ width: '100%' }} alt="" />
                <p>Step 3: The registered partners will receive a unique user id and password for operating their account on FOSTAC portal.</p>
                <p>Step 4: For the qualified trainee’s certificate will be generated, which contains the unique number, and it is required for mandatory compliance of FSS regulation.</p>

                <p>Note: The information provided on the portal is used to provide status regarding the training across the country.</p>

                <p class='fs-1 fw-bold'>NLRP, Trainer & Assessor</p>
                <p>Step 1: Any domain experts from Academia, industry or other food safety professionals like researchers, the auditor can submit their resume at tr.fostac@fssai.gov.in.</p>
                <p>Step 2: After verification, the experts eligible as NLRP can organise competency-based NLRP workshop, as well as trainers, are allowed to train trainers on the specific training programme.</p>


                <p class='fs-1 fw-bold'>FOSTAC-Trainers, NLRP, Assessor Registration</p>
                <img src={require('../image/fostac5.png')} style={{ width: '100%' }} alt="" />
                <p>Step 3: In the TOT programme, each participant got assessed, and the detail of the applicant will be transferred automatically to the FOSTAC portal. Additionally, senior trainers and NLRPs will enrol in the same portal as an assessor.</p>
                <p>Step 4: Once the trainers, assessors and NLRP details got uploaded in the portal, then they will receive an individual login id and password for accessing the portal.</p>

                <br />

            </div>
            <SubContact />

        </div>
    )
}

export default Fostac