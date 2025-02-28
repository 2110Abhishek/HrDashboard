"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../styles/dashboard.module.css";
import { FaUsers, FaBriefcase, FaChartLine } from "react-icons/fa";

const DashboardCards = () => {
  const router = useRouter(); // For navigation

  // Dashboard data
  const [stats] = useState([
    { id: 1, title: "Available Positions", value: 24, highlight: "4 Urgently Needed", icon: <FaBriefcase />, link: "positions" },
    { id: 2, title: "Job Open", value: 10, highlight: "4 Active Hiring", icon: <FaChartLine />, link: "jobs" },
    { id: 3, title: "New Employees", value: 24, highlight: "4 Departments", icon: <FaUsers />, link: "employees" },
  ]);

  return (
    <div className={styles.dashboardCards}>
      {stats.map((stat) => (
        <div key={stat.id} className={styles.card} onClick={() => router.push(`/dashboard/${stat.link}`)}>
          <div className={styles.iconContainer}>{stat.icon}</div>
          <h3 className={styles.cardTitle}>
            {stat.title} <span className={styles.value}>{stat.value}</span>
          </h3>
          <p><span className={styles.highlight}>{stat.highlight}</span></p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
