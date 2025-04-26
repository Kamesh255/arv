import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


export const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        subject: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.name.trim()) formErrors.name = "Full Name is required";
        if (!formData.email.trim()) formErrors.email = "Email is required";
        if (!formData.phone.trim()) formErrors.phone = "Phone is required";
        if (!formData.course.trim()) formErrors.course = "Course Preferred is required";
        if (!formData.subject.trim()) formErrors.subject = "Subject is required";

        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        } else {
            setErrors({});
        }

        try {
            const res = await axios.post("https://arvservicesconsultant.com/api/send", formData);
            Swal.fire({
                title: "Email sent successfully!",
                icon: "success",
                draggable: true
            });
            setFormData({
                name: "",
                email: "",
                phone: "",
                course: "",
                subject: "",
            });
        } catch (error) {
            Swal.fire({
                title: "Failed to send email",
                icon: "error",
                draggable: true
            });
        }
    };

    return (
        <div className="col-11 rounded-4 bgdmg m-auto">
            <form className="col-11 m-auto text-white text-start" onSubmit={handleSubmit}>

                <label className="mt-3" htmlFor="name">Full Name*</label>
                {errors.name && <small className="text-danger mx-2">{errors.name}</small>}
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                />

                <label className="mt-3" htmlFor="email">Email*</label>
                {errors.email && <small className="text-danger mx-2">{errors.email}</small>}
                <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                />

                <label className="mt-3" htmlFor="phone">Phone*</label>
                {errors.phone && <small className="text-danger mx-2">{errors.phone}</small>}
                <input
                    className="form-control"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                />

                <label className="mt-3" htmlFor="course">Course Preferred*</label>
                {errors.course && <small className="text-danger mx-2">{errors.course}</small>}
                <input
                    className="form-control"
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    placeholder="Enter Course Preferred"
                />

                <label className="mt-3" htmlFor="subject">Subject*</label>
                {errors.subject && <small className="text-danger mx-2">{errors.subject}</small>}
                <textarea
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter Your Subject"
                ></textarea>

                <button type="submit" className="btn btn-outline-light rounded-5 my-3">Submit</button>
            </form>
        </div>
    );
};
