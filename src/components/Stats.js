import React, { useEffect, useState } from "react";
import "../Stats.css";
const fetchAppointments = async () => {
  try {
    // const response = await fetch(
    //   "https://appoint-med-backend-rokc9ehrd-bharadwaj-183.vercel.app/getAppointments"
    // );
    const response = await fetch(
      "https://appoint-med-backend.vercel.app/getAppointments",
      // "http://localhost:3001/getAppointments",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response in stats.js", response);

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return [];
  }
};

// Function to populate the table with data
function populateAppointmentsTable(appointments) {
  const tableBody = document.getElementById("tableBody");

  // Clear existing table rows
  tableBody.innerHTML = "";

  // Loop through the appointments and create table rows
  appointments.forEach((appointment) => {
    const row = tableBody.insertRow();

    // Populate cells with appointment data
    row.insertCell(0).textContent = appointment.Username_doctor;
    row.insertCell(1).textContent = appointment.bookingId;
    row.insertCell(2).textContent = appointment.customerName;
    row.insertCell(3).textContent = appointment.customerPhoneNumber;
    row.insertCell(4).textContent = appointment.amount;
    row.insertCell(5).textContent = appointment.serviceTitle;
    row.insertCell(6).textContent = appointment.transactionId;
    row.insertCell(7).textContent = appointment.date.day;
  });
}

const Stats = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to clear search term
  const clearSearch = () => {
    setSearchTerm("");
    fetchAppointments(); // Call fetchAppointments to show all entries
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAppointments();
      setAppointments(data);
      console.log("appointmets got", appointments);
      populateAppointmentsTable(data); // Populate the full table initially
    };
    fetchData();
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      // If search term is empty, show all entries
      populateAppointmentsTable(appointments);
    } else {
      const filteredAppointments = appointments.filter((appointment) => {
        const word = searchTerm.toLowerCase();

        return (
          appointment.Username_doctor.toLowerCase().includes(word) ||
          appointment.serviceTitle.toLowerCase().includes(word) ||
          appointment.customerName.toLowerCase().includes(word)
        );
      });

      // Call function to populate the table with filtered data
      populateAppointmentsTable(filteredAppointments);
    }
  };

  return (
    <div class="appointment-div">
      <h2 class="appointment-heading">Appointments Statistics</h2>
      <div>
        <label>Search here:</label>
        <input
          type="text"
          class="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {searchTerm && (
          <button class="clear-button" onClick={clearSearch}>
            &times;
          </button>
        )}

        <button onClick={handleSearch} class="search-button">
          Search
        </button>
      </div>
      <table id="appointmentsTable">
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Booking ID</th>
            <th>Customer Name</th>
            <th>Phone Number</th>
            <th>Amount</th>
            <th>Service Title</th>
            <th>Transaction ID</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="tableBody"></tbody>
      </table>
    </div>
  );
};

export default Stats;
