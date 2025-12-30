import React, { useState } from "react";
import "../apply.css";
import Header from "./Header";

const WHATSAPP_NUMBER = "916385697119";

const Apply: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    classApplying: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    const message = `
📌 New Admission Application

Student Name: ${formData.studentName}
DOB: ${formData.dob}
Class: ${formData.classApplying}

Parent Name: ${formData.parentName}
Phone: ${formData.phone}
Email: ${formData.email}

Address:
${formData.address}
    `;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (<>
    <Header/>
    <div className="apply-page">
      <div className="apply-card">
        <h1 className="apply-title">Apply for Admission</h1>
        <p className="apply-subtitle">
          Begin your child’s journey with Crescent Matriculation School
        </p>

        <form className="apply-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="studentName"
            placeholder="Student Full Name"
            required
            onChange={handleChange}
          />
          <input type="date" name="dob" required onChange={handleChange}/>

          <select name="classApplying" required onChange={handleChange}>
            <option value="">Select Class</option>
            <option>LKG</option>
            <option>UKG</option>
            <option>Class I</option>
            <option>Class II</option>
            <option>Class III</option>
            <option>Class IV</option>
            <option>Class V</option>
            <option>Class VI</option>
            <option>Class VII</option>
            <option>Class VIII</option>
            <option>Class IX</option>
            <option>Class X</option>
          </select>

          <input
            type="text"
            name="parentName"
            placeholder="Parent / Guardian Name"
            required
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <textarea
            name="address"
            rows={4}
            placeholder="Residential Address"
            required
            onChange={handleChange}
          />

          <button className="apply-btn" type="submit">
            Submit via WhatsApp
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Apply;
