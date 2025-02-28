"use client";
import React from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter
import styles from "../styles/recentActivity.module.css";
import { FaBriefcase, FaClock, FaArrowLeft } from "react-icons/fa";

const RecentActivityPage = () => {
  const router = useRouter(); // ✅ Initialize useRouter

  const activities = [
    { id: 1, text: "You Posted a New Job", time: "10:40 AM, 10 Sept 2021", icon: <FaBriefcase /> },
    { id: 2, text: "You Scheduled an Interview", time: "2:00 PM, 12 Sept 2021", icon: <FaClock /> },
    { id: 3, text: "You Updated a Job Listing", time: "9:15 AM, 14 Sept 2021", icon: <FaBriefcase /> },
  ];

  return (
    <div className={styles.activityContainer}>
      {/* Back Button */}
      <button 
        className={styles.backButton} 
        onClick={() => router.back()} // ✅ Go Back to Previous Page
      >
        <FaArrowLeft /> Back
      </button>

      <h1 className={styles.pageTitle}>📌 Recent Activity Details</h1>
      <p className={styles.pageSubtitle}>Here is the complete history of your recent activities.</p>

      <div className={styles.activityList}>
        {activities.map((activity) => (
          <div key={activity.id} className={styles.activityCard}>
            <span className={styles.icon}>{activity.icon}</span>
            <div>
              <h3>{activity.text}</h3>
              <p className={styles.timestamp}>{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityPage;
