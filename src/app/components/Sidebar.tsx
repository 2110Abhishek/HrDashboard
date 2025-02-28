"use client";
import { useRouter } from "next/navigation"; // ✅ Import Router for navigation
import styles from "../styles/dashboard.module.css";
import { FaUserFriends, FaCalendar, FaUsers, FaCog } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const router = useRouter(); // ✅ Initialize Router

  return (
    <div className={styles.sidebar}>
      {/* Profile Section */}
      <div className={styles.profileSection}>
        <img 
          src="https://via.placeholder.com/50"  // Replace with real image URL
          alt="Profile"
          className={styles.profileImage}
        />
        <div>
          <h3 className={styles.profileName}>Abhishek Choudhari</h3>
          <p className={styles.profileRole}>HR Manager</p>
        </div>
      </div>

      <ul className={styles.menu}>
        <li onClick={() => router.push("/dashboard")} className={styles.active}>
          <MdDashboard /> Dashboard
        </li>
        <li onClick={() => router.push("/recruitment")}>
          <FaUserFriends /> Recruitment
        </li>
        <li onClick={() => router.push("/schedule")}>
          <FaCalendar /> Schedule
        </li>
        <li onClick={() => router.push("/employee")}>
          <FaUsers /> Employee
        </li>
        <li onClick={() => router.push("/settings")}>
          <FaCog /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
