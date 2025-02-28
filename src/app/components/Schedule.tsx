"use client";
import { useRouter } from "next/navigation"; // ✅ Import useRouter
import styles from "../styles/dashboard.module.css";

const Schedule = () => {
  const router = useRouter(); // ✅ Initialize Router

  return (
    <div className={styles.schedule}>
      <h3>Upcoming Schedule</h3>
      <p>📌 Review candidate applications - 11:30 AM</p>
      <p>🎤 Interview with candidates - 10:30 AM</p>
      <p>📅 Product meeting - 09:15 AM</p>

      {/* ✅ Navigate to Create Schedule Page */}
      <button
        className={styles.scheduleBtn}
        onClick={() => router.push("/schedule/create")}
      >
        Create New Schedule
      </button>
    </div>
  );
};

export default Schedule;
