import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'; 
import { useSelector } from 'react-redux';

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
  }, []);
  return (
    <>
      
    </>
  );  
}