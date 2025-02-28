import styles from "../styles/dashboard.module.css";
import { FaUsers, FaUserPlus } from "react-icons/fa";

export default function JobStats() {
  return (
    <div className={styles.jobStats}>
      {/* Total Employees Card */}
      <div className={styles.card}>
        <div className={styles.icon}>
          <FaUsers size={30} color="#fff" />
        </div>
        <p>Total Employees</p>
        <h2>216</h2>
        <h5>👨 120 Men & 👩 96 Women</h5>
      </div>

      {/* Talent Requests Card */}
      <div className={styles.card}>
        <div className={styles.icon}>
          <FaUserPlus size={30} color="#fff" />
        </div>
        <p>Talent Requests</p>
        <h2>342</h2>
        <h5>👨 6 Men & 👩 10 Women</h5>
      </div>
    </div>
  );
}
