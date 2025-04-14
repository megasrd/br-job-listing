"use client";

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'; 
import { useSelector } from 'react-redux';
import DOMPurify from 'isomorphic-dompurify'

import styles from  "../../styles/pages/job-details.module.scss";

export default function Page() {
  const router = useRouter();
  // Retrive relevant job post from the store.
  // Ideally I would rather make a query to an API to get the job post.
  // But for the sake of this example I will iterate over the job posts.
  let [ jobPost, setJobPost ] = useState([]);
  let { value, loading, error } = useSelector((state) => state.jobs);
  
  useEffect(() => {
    const { slug } = router.query;
    if (!loading && !error && value.length > 0) {
      const foundJob = value.find((job) => job.id == slug);
      setJobPost(foundJob || null);
    }
  }, [router.query, value, loading, error]);

  const sanitizeHTML = (html) => {
    return DOMPurify.sanitize(html);
  }

  return (
    <>      
      <div className={styles.jobDetails}>
        <Link href="/" className={styles.jobDetails__back}> Back to jobs listing </Link>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : jobPost && !loading ? (
            <div className={styles.jobDetails}>      
              <div className={styles.jobDetails__wrapper}>
                <h2 className={styles.jobDetails__title}> { jobPost?.title || "Untitled" } </h2>
                <h3 className={styles.jobDetails_company}> { jobPost?.company || "Unknown Company" } </h3>
                <div className={styles.jobDetails__skills}>
                    {jobPost.skills?.map((skill, index) => (
                      <span key={index} className={styles.jobDetails__skills_item}>
                        {skill}
                      </span>
                    ))}          
                </div>
                <div className={styles.jobDetails__description} dangerouslySetInnerHTML={{ __html: sanitizeHTML(jobPost?.description || "") }} />
              </div>
            </div>
        ) : (
          <p>Job post not found.</p>
        )}
      </div>    
    </>
  );
}