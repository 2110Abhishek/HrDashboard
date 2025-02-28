"use client";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/schedule.module.css";
import { FaArrowLeft } from "react-icons/fa";

const Schedule = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => router.back()}>
        <FaArrowLeft /> Back
      </button>

      <h1>🗓️ Upcoming Schedules</h1>
      <ul>
        <li>📌 Review Applications - 11:30 AM</li>
        <li>🎤 Interview with Candidates - 10:30 AM</li>
        <li>📅 Product Meeting - 09:15 AM</li>
      </ul>

      <button onClick={() => router.push("/schedule/create")}>
        ➕ Create New Schedule
      </button>
    </div>
  );
};

export default Schedule;
