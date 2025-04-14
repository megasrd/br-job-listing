"use client";

import styles from './JobList.module.scss';

import JobItem from '../JobItem/JobItem.js';

const JobList = ({jobs, onViewDetails}) => {

    const routeToDetailsPage = (id) => {
        onViewDetails(id);
    }

    if (!jobs || jobs.length === 0) {
        return <div className="no-jobs">No jobs available</div>;
    }
    
    return (
        <div className={styles.jobList}>
            {jobs.map((job, key) => (
                <JobItem onViewDetails={() => {routeToDetailsPage(job.id)}}  key={key} title={job.title} company={job.company} role={job.role} experience={job.experience} skills={job.skills} />
            ))}
        </div>
    );
}

export default JobList;