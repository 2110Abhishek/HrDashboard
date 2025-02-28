"use client";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/employee.module.css";
import { FaArrowLeft } from "react-icons/fa";

const Employee = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => router.back()}>
        <FaArrowLeft /> Back
      </button>

      <h1>👥 Employee Details</h1>
      <table className={styles.employeeTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Software Engineer</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>HR Manager</td>
            <td>jane@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
