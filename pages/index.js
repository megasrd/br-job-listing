"use client";

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import JobItem from '../src/app/components/JobItem/JobItem.js';

import '../styles/pages/index.scss';

export default function Home() {

  let { value, loading, error } = useSelector((state) => state.jobs);

  console.log(value)

  return (
    <>
      <h2 className='title'> Find Jobs </h2>
      <p className='description'> Find the best job for you </p>
      <div className="job-list">
        { !loading && value.map((job, key) => (
          <JobItem key={key} title={job.title} company={job.company} role={job.role} experience={job.experience} skills={job.skills} />
        )) }        
      </div>
    </>
  );
}
