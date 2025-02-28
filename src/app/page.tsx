import Sidebar from './components/Sidebar';
import DashboardCards from './components/DashboardCards';
import Announcement from './components/Announcement';
import RecentActivity from './components/RecentActivity';
import Schedule from './components/Schedule';
import Navbar from './components/Navbar';
import JobStats from './components/JobStats'; // New Section
import styles from './styles/dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.content}>
          <h1 className={styles.title}>Dashboard</h1>
          <DashboardCards />
          <JobStats />
          
          {/* Announcements, Schedule & Recent Activity */}
          <div className={styles.sections}>
            <RecentActivity />
            <Schedule />
            <Announcement />
          </div>

          {/* Total Employees & Talent Requests Below Jobs */}
        </div>
      </div>
    </div>
  );
}
