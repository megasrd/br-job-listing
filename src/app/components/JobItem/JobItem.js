'use client';

import './JobItem.scss';

const JobItem = ({ id, title, company, role, experience, skills, onViewDetails }) => {

    const handleViewDetails = () => {
        onViewDetails(id);
    }

    return (
        <div className="job-item">
            <div className="job-item__header">
                <h3 className="job-item__header--title">{title}</h3>
                <span className="job-item__header--company">{company}</span>            
            </div>            
            <div className="job-item__description">
                <ul className="job-item__description--list">
                    <li className="job-item__description--list-item">
                        <span className="job-item__description--list-item-label">Role:</span>
                        <span className="job-item__description--list-item-value">{role}</span>
                    </li>
                    <li className="job-item__description--list-item">
                        <span className="job-item__description--list-item-label">Experience:</span>
                        <span className="job-item__description--list-item-value">{experience}+ Years</span>
                    </li>
                    <li className="job-item__description--list-item">
                        <span className="job-item__description--list-item-label">Skills:</span>
                        <span className="job-item__description--list-item-skills">
                            {skills.map((skill, index) => (
                                <span key={index} className="job-item__description--list-item-skill">
                                    {skill}
                                </span>
                            ))}
                        </span>
                    </li>
                </ul>
                <button onClick={handleViewDetails} className="job-item__description--apply-button">
                    View details
                </button>
            </div>
        </div>
    );
};

export default JobItem;