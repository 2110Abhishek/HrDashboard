"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "@/app/styles/settings.module.css";
import { FaArrowLeft } from "react-icons/fa";

const Settings = () => {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => router.back()}>
        <FaArrowLeft /> Back
      </button>

      <h1>⚙️ Dashboard Settings</h1>

      <div className={styles.settingItem}>
        <label>🌙 Dark Mode</label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>

      <div className={styles.settingItem}>
        <label>🔔 Notifications</label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
        />
      </div>
    </div>
  );
};

export default Settings;
