import styles from "../styles/dashboard.module.css";

const Announcement = () => {
  return (
    <div className={styles.announcement}>
      <h3>🚀 Announcements</h3>
      <div className={styles.announcementItem}>
        <p>📢 Outing schedule for every department</p>
        <span>🕒 5 minutes ago</span>
      </div>
      <div className={styles.announcementItem}>
        <p>📅 Meeting with HR Department</p>
        <span>🕒 Yesterday, 12:30 PM</span>
      </div>
      <div className={styles.announcementItem}>
        <p>💡 IT Department needs more UX/UI designers</p>
        <span>🕒 Yesterday, 09:15 AM</span>
      </div>
    </div>
  );
};

export default Announcement;
