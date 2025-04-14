"use client";

import styles from '../styles/pages/index.module.scss';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import JobList from '../src/app/components/JobList/JobList';

export default function Home() {

  const router = useRouter();

  let { value, loading, error } = useSelector((state) => state.jobs);

  const routeToDetailsPage = (id) => {
    router.push(`/job/${id}`);
  }

  return (
    <>
      <h2 className={styles.title}> Find Jobs </h2>
      <p className={styles.description}> Find the best job for you </p>
      { !loading && (
        <JobList jobs={value} onViewDetails={routeToDetailsPage} />
      ) }       
      { loading && <div className={styles.loading}>Loading...</div> }
      { error && <div className={styles.error}>{error}</div> } 
    </>
  );
}
