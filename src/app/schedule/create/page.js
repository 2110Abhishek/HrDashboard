"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter
import styles from "../../styles/createSchedule.module.css"; // ✅ Import Styles
import { FaArrowLeft } from "react-icons/fa";

const CreateSchedule = () => {
  const router = useRouter(); // ✅ Initialize Router

  // ✅ State for new schedule
  const [schedule, setSchedule] = useState({
    title: "",
    time: "",
    date: "",
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Schedule Created:", schedule);
    alert("✅ New Schedule Created Successfully!");
    router.push("/"); // ✅ Redirect to Dashboard (or Schedule page)
  };

  return (
    <div className={styles.createScheduleContainer}>
      {/* ✅ Back Button */}
      <button className={styles.backButton} onClick={() => router.back()}>
        <FaArrowLeft /> Back
      </button>

      <h1 className={styles.pageTitle}>🗓️ Create New Schedule</h1>
      <form onSubmit={handleSubmit} className={styles.scheduleForm}>
        <label>Schedule Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter title..."
          value={schedule.title}
          onChange={handleChange}
          required
        />

        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={schedule.date}
          onChange={handleChange}
          required
        />

        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={schedule.time}
          onChange={handleChange}
          required
        />

        <button type="submit" className={styles.submitBtn}>
          Save Schedule
        </button>
      </form>
    </div>
  );
};

export default CreateSchedule;
