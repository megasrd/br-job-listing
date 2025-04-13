import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'; 
import { useSelector } from 'react-redux';
import DOMPurify from 'dompurify'

import "../../styles/pages/job-details.scss";

export default function Page() {
  const router = useRouter();
  // Retrive relevant job post from the store.
  // Ideally I would rather make a query to an API to get the job post.
  // But for the sake of this example I will iterate over the job posts.
  let [ jobPost, setJobPost ] = useState([]);
  let { value, loading, error } = useSelector((state) => state.jobs);
  
  useEffect(() => {
    const { slug } = router.query;
    setJobPost(value.find((job) => job.id == slug));    
    console.log(jobPost);
  }, []);

  const sanitizeHTML = (html) => {
    return DOMPurify.sanitize(html);
  }

  return (
    <div className="job-details">      
      <div className="wrapper">
        <h2> { jobPost?.title || "Untitled" } </h2>
        <h3> { jobPost?.company || "Unknown Company" } </h3>
        <div 
          className='description' 
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(jobPost?.description || "No description") }} 
        />
      </div>
    </div>
  );  
}