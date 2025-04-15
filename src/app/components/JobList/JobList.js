"use client";

import styles from './JobList.module.scss';

import JobItem from '../JobItem/JobItem.js';

import { useState, useEffect } from 'react';

const JobList = ({jobs, onViewDetails}) => {

    const routeToDetailsPage = (id) => {
        onViewDetails(id);
    }

    const [language, setLanguage] = useState('all');
    const [search, setSearch] = useState('');
    
    const [filteredJobs, setFilteredJobs] = useState(jobs);

    useEffect(() => {
        if (language === 'all') {
            setFilteredJobs(jobs);
        } else {
            setFilteredJobs(jobs.filter((item) => {
                return item.skills.some((skill) => skill.toLowerCase() === language.toLowerCase());
            }));
        }
        if (search !== '') {
            setFilteredJobs(jobs.filter((item) => {
                const searchCriteria = `${item.title} ${item.company} ${item.role} ${item.skills.toString()}`.toLowerCase();
                return searchCriteria.includes(search.toLowerCase());
            }))
        }
    }, [language, search, jobs]);
    

    if (!jobs || jobs.length === 0) {
        return <div className="no-jobs">No jobs available</div>;
    }    

    return (
        <div className={styles.jobList}> 
            <div className={styles.jobList__filters}> 
                <div className={styles.jobList__filters__item}> 
                    <label className={styles.jobList__filters__label} htmlFor="language">Language</label>
                    <select onChange={(e) => { setLanguage(e.target.value) }} className={styles.jobList__filters__input} name="language" id="language">
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
                    <input onInput={(e) => { setSearch(e.target.value) }} placeholder="Title, company, role or skills..." type="text" className={styles.jobList__filters__input} name="search" id="search" />
                </div>                
            </div>
            <div className={styles.jobList__items}>
                {filteredJobs.map((job, key) => (
                    <JobItem onViewDetails={() => {routeToDetailsPage(job.id)}}  key={key} title={job.title} company={job.company} role={job.role} experience={job.experience} skills={job.skills} />
                ))}
            </div>
        </div>
    );
}

export default JobList;