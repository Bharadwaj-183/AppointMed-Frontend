import React, { useEffect, useState } from "react";
import "../DoctorStats.css"; // Add the appropriate CSS file for styling
let totalEarnings;
const dicEmail = {
  cardiology: "mukeshtripathi@gmail.com",
  ophthalmology: "sripriyareddy@gmail.com",
  dentistry: "sunithkumar@gmail.com",
  ent: "naveenchandra45@gmail.com",
  dermatology: "jyothkulkarni@gmail.com",
  orthopedics: "swethanaidu22@gmail.com",
  psychiatry: "anilkumar@gmail.com",
  physiotherapy: "senthilmurugan@gmail.com",
};
const fetchDoctorStats = async () => {
  try {
    const response = await fetch(
      "https://appoint-med-backend.vercel.app/getAppointments"
    );
    const { data } = await response.json();

    // Calculate total earning for each doctor
    const doctorStatsMap = {};
    data.forEach((appointment) => {
      const doctorName = appointment.Username_doctor;
      if (!doctorStatsMap[doctorName]) {
        doctorStatsMap[doctorName] = {
          doctorName: doctorName,
          serviceTitle: appointment.serviceTitle,
          totalEarning: parseInt(appointment.amount),
          doctorEmail: dicEmail[appointment.serviceTitle.toLowerCase()],
          totalBookings: 1,
        };
      } else {
        doctorStatsMap[doctorName].totalEarning += parseInt(appointment.amount);
        doctorStatsMap[doctorName].totalBookings += 1;
      }
    });

    // Convert doctorStatsMap to an array
    const doctorStats = Object.values(doctorStatsMap);

    doctorStats.sort((a, b) => b.totalEarning - a.totalEarning);

    return doctorStats;
  } catch (error) {
    console.error("Error fetching doctor stats:", error);
    return [];
  }
};

const DoctorStats = () => {
  const [doctorStats, setDoctorStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDoctorStats();
      setDoctorStats(data);
    };
    fetchData();
  }, []);
  console.log(doctorStats);
  totalEarnings = doctorStats.reduce(
    (total, doctor) => total + doctor.totalEarning,
    0
  );
  return (
    <div class="doctor-stats-div">
      <h2 class="doctor-stats-heading">Doctors Statistics</h2>
      <p>(In the order of their earnings)</p>
      <table id="doctorStatsTable">
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Service Title</th>
            <th>Total Earning</th>
            <th>Total Bookings</th>
            <th>Doctor Email</th>
          </tr>
        </thead>
        <tbody id="doctorStatsTableBody">
          {doctorStats.map((doctor) => (
            <tr>
              <td>{doctor.doctorName}</td>
              <td>{doctor.serviceTitle}</td>
              <td>{doctor.totalEarning}</td>
              <td>{doctor.totalBookings}</td>
              <td>{doctor.doctorEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-earnings">
        <strong>Total Earnings of All Doctors:</strong> {totalEarnings}
      </div>
    </div>
  );
};

export default DoctorStats;
