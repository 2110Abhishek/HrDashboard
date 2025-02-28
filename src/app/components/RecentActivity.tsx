"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import
import styles from "../styles/dashboard.module.css";
import { FaBriefcase, FaClock, FaArrowRight } from "react-icons/fa";

const RecentActivity = () => {
  const router = useRouter(); // ✅ Initialize useRouter

  const [activities] = useState([
    { id: 1, text: "You Posted a New Job", time: "10:40 AM, 10 Sept 2021", icon: <FaBriefcase /> },
    { id: 2, text: "You Scheduled an Interview", time: "2:00 PM, 12 Sept 2021", icon: <FaClock /> },
    { id: 3, text: "You Updated a Job Listing", time: "9:15 AM, 14 Sept 2021", icon: <FaBriefcase /> },
  ]);

  return (
    <div className={styles.recentActivity}>
      <h3 className={styles.recentTitle}>📌 Recent Activity</h3>
      <div className={styles.activityList}>
        {activities.map((activity) => (
          <div key={activity.id} className={styles.activityItem}>
            <span className={styles.icon}>{activity.icon}</span>
            <div>
              <p>{activity.text}</p>
              <span className={styles.timestamp}>{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Ensure button is working */}
      <button 
        className={styles.activityBtn} 
        onClick={() => router.push("/recent-activity")}
      >
        See All Activity <FaArrowRight />
      </button>
    </div>
  );
};

export default RecentActivity;
