import { useState } from "react";
import "../Booking.css";
const Booking = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhoneNumber: "",
    problem: "",
    consultationType: "",
    inputProblem: "",
    duration: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://appoint-med-backend.vercel.app/submitForm",
        // "http://localhost:3001/submitForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      const responseData = await response.json();

      // Handle the response data
      console.log("RESPONSE OBTAINED", responseData);

      const detailsMessage = `
      Appointment booked successfully!

      Details:
      - Doctor Name -  ${responseData.data.doctorName}
      - Consultation Type -  ${responseData.data.consultationType}
      - Time: ${responseData.data.time}
    `;

      // Display the formatted message in a single alert
      alert(detailsMessage);

      window.location.href = "/booking";
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        className="bookinginput"
        type="text"
        name="customerName"
        value={formData.customerName}
        onChange={handleChange}
        required
      />{" "}
      <br></br>
      <label>
        Phone Number:
        <input
          className="bookinginput"
          type="tel"
          name="customerPhoneNumber"
          value={formData.customerPhoneNumber}
          onChange={handleChange}
          required
        />
        <br></br>
      </label>
      <label>
        Problem type:
        <select
          className="bookingselect"
          name="problem"
          value={formData.problem}
          onChange={handleChange}
          required
        >
          <option value="">Select one</option>
          <option value="cardiology">Cardiology (Heart related)</option>
          <option value="ophthalmology">Ophthalmology (Eye related)</option>
          <option value="dentistry">Dentistry</option>
          <option value="ENT">ENT</option>
          <option value="dermatology">Dermatology</option>
          <option value="orthopedics">Orthopedics (Bone related)</option>
          <option value="psychiatry">Psychiatry</option>
          <option value="physiotherapy">Physiotherapy</option>
        </select>
        <br></br>
      </label>
      <label>
        Consultation Type:
        <select
          className="bookingselect"
          name="consultationType"
          value={formData.consultationType}
          onChange={handleChange}
          required
        >
          <option value="">Select </option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        <br></br>
      </label>
      <label>
        Problem:
        <input
          className="bookinginput"
          type="text"
          name="inputProblem"
          value={formData.inputProblem}
          onChange={handleChange}
        />
        <br></br>
      </label>
      <label>Problem since:</label>
      <input
        className="bookinginput"
        type="text"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
      />
      <br></br>
      <label>Email</label>
      <input
        className="bookinginput"
        type="email"
        name="customerEmail"
        value={formData.customerEmail}
        onChange={handleChange}
        required
      />
      <button className="bookingsubmit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Booking;
