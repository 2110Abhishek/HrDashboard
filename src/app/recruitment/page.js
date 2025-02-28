"use client";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/recruitment.module.css";
import { FaArrowLeft } from "react-icons/fa";

const Recruitment = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => router.back()}>
        <FaArrowLeft /> Back
      </button>

      <h1>📢 Recruitment Process</h1>
      <p>Learn how to effectively recruit employees with the best practices.</p>

      <ul>
        <li>📌 Define the Job Role & Responsibilities</li>
        <li>📌 Post Job Openings on Multiple Platforms</li>
        <li>📌 Screen & Shortlist Candidates</li>
        <li>📌 Conduct Interviews & Assessments</li>
        <li>📌 Finalize Hiring & Onboarding Process</li>
      </ul>
    </div>
  );
};

export default Recruitment;
