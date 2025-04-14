'use client';

import styles from './JobItem.module.scss';

const JobItem = ({ id, title, company, role, experience, skills, onViewDetails }) => {

    const handleViewDetails = () => {
        onViewDetails(id);
    }

    return (
        <div className={styles.jobItem}>
            <div className={styles.jobItem__header}>
                <h3 className={styles['jobItem__header--title']}>{title}</h3>
                <span className={styles['jobItem__header--company']}>{company}</span>            
            </div>            
            <div className={styles.jobItem__description}>
                <ul className={styles['jobItem__description--list']}>
                    <li className={styles['jobItem__description--list-item']}>
                        <span className={styles['jobItem__description--list-item-label']}>Role:</span>
                        <span className={styles['jobItem__description--list-item-value']}>{role}</span>
                    </li>
                    <li className={styles['jobItem__description--list-item']}>
                        <span className={styles['jobItem__description--list-item-label']}>Experience:</span>
                        <span className={styles['jobItem__description--list-item-value']}>{experience}+ Years</span>
                    </li>
                    <li className={styles['jobItem__description--list-item']}>
                        <span className={styles['jobItem__description--list-item-label']}>Skills:</span>
                        <span className={styles['jobItem__description--list-item-skills']}>
                            {skills.map((skill, index) => (
                                <span key={index} className={styles['jobItem__description--list-item-skill']}>
                                    {skill}
                                </span>
                            ))}
                        </span>
                    </li>
                </ul>
                <button onClick={handleViewDetails} className={styles['jobItem__description--apply-button']}>
                    View details
                </button>
            </div>
        </div>
    );
};

export default JobItem;