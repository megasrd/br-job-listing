"use client";

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ProtectedRoute from '../src/app/components/Auth/ProtectedRoute'

import '../styles/pages/index.scss';
import '../styles/pages/new-job.scss';

export default function Home() {

  const router = useRouter();

  const handleSubmit = (e) => {
      e.preventDefault();
      //Submit job data to the server
  }  

  return (
    <ProtectedRoute>
      <h2 className='title'> Post a New Job </h2>
      <form onSubmit={handleSubmit} className="job-form">
        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <input type="text" id="title" name="title" className="form-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" className="form-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role Category</label>
          <input type="text" id="role" name="role" className="form-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Years of Experience Required</label>
          <input type="number" id="experience" name="experience" className="form-input" min="0" required />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Required Skills (comma-separated)</label>
          <input type="text" id="skills" name="skills" className="form-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Job Description</label>
          <textarea id="description" name="description" className="form-input description" required></textarea>
        </div>

        <button type="submit" className="submit-btn">Post Job</button>
      </form>
    </ProtectedRoute>
  );
}
