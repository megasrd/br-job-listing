"use client";

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import JobItem from '../src/app/components/JobItem/JobItem.js';

import '../styles/pages/index.scss';

export default function Home() {

  const router = useRouter();

  let { value, loading, error } = useSelector((state) => state.jobs);

  const routeToDetailsPage = (id) => {
    router.push(`/job/${id}`);
  }

  return (
    <>
      <h2 className='title'> Find Jobs </h2>
      <p className='description'> Find the best job for you </p>
      <div className="job-list">
        { !loading && value.map((job, key) => (
          <JobItem onViewDetails={ () => { routeToDetailsPage(job.id) } } key={key} title={job.title} company={job.company} role={job.role} experience={job.experience} skills={job.skills} />
        )) }       
        { loading && <div className="loading">Loading...</div> }
        { error && <div className="error">{error}</div> } 
      </div>
    </>
  );
}
