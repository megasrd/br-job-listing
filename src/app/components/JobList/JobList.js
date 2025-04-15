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
            <div className={styles.jobList__filters}> 
                <div className={styles.jobList__filters__item}> 
                    <label className={styles.jobList__filters__label} htmlFor="language">Language</label>
                    <select className={styles.jobList__filters__input} name="language" id="language">
                        <option value="all">All</option>
                        <option value="Javascript"> Javascript </option>
                        <option value="React"> React </option>
                        <option value="Node.js"> Node.js </option>
                        <option value="Python"> Python </option>
                        <option value="GraphQL"> GraphQL </option>
                        <option value="Kotlin"> Kotlin </option>
                    </select>
                </div>
                <div className={styles.jobList__filters__item}> 
                    <label className={styles.jobList__filters__label} htmlFor="search">Search</label>
                    <input type="text" className={styles.jobList__filters__input} name="search" id="search" />
                </div>                
            </div>
            <div className={styles.jobList__items}>
                {jobs.map((job, key) => (
                    <JobItem onViewDetails={() => {routeToDetailsPage(job.id)}}  key={key} title={job.title} company={job.company} role={job.role} experience={job.experience} skills={job.skills} />
                ))}
            </div>
        </div>
    );
}

export default JobList;