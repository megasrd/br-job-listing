"use client";

import styles from '../styles/pages/new-job.module.scss';

import { useRouter } from 'next/router';
import ProtectedRoute from '../src/app/components/Auth/ProtectedRoute'

export default function Home() {

  const router = useRouter();

  const handleSubmit = (e) => {
      e.preventDefault();
      //Submit job data to the server
  }  

  return (
    <ProtectedRoute>
      <h2 className={styles.title}> Post a New Job </h2>
      <form onSubmit={handleSubmit} className={styles.jobForm}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Job Title</label>
          <input type="text" id="title" name="title" className={styles.formInput} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" className={styles.formInput} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="role">Role Category</label>
          <input type="text" id="role" name="role" className={styles.formInput} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="experience">Years of Experience Required</label>
          <input type="number" id="experience" name="experience" className={styles.formInput} min="0" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="skills">Required Skills (comma-separated)</label>
          <input type="text" id="skills" name="skills" className={styles.formInput} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Job Description</label>
          <textarea id="description" name="description" className={`${styles.formInput} ${styles.description}`} required></textarea>
        </div>

        <button type="submit" className={styles.submitBtn}>Post Job</button>
      </form>
    </ProtectedRoute>
  );
}
