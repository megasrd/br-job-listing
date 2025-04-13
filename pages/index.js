import Layout from '../src/app/layout';
import JobItem from '../src/app/components/JobItem/JobItem.js';

import '../styles/pages/index.scss';

export default function Home() {
  return (
    <Layout>
      <>
        <h2 className='title'> Find Jobs </h2>
        <p className='description'> Find the best job for you </p>
        <div className="job-list">
          <JobItem title="Software Engineer" company="Google" role="Full Stack Developer" experience="3-5 years" skills={['Javascript', 'HTML', 'CSS']} />
          <JobItem title="Software Engineer" company="Google" role="Full Stack Developer" experience="3-5 years" skills={['Javascript', 'HTML', 'CSS']} />
          <JobItem title="Software Engineer" company="Google" role="Full Stack Developer" experience="3-5 years" skills={['Javascript', 'HTML', 'CSS']} />
          <JobItem title="Software Engineer" company="Google" role="Full Stack Developer" experience="3-5 years" skills={['Javascript', 'HTML', 'CSS']} />
          <JobItem title="Software Engineer" company="Google" role="Full Stack Developer" experience="3-5 years" skills={['Javascript', 'HTML', 'CSS']} />
        </div>
      </>
    </Layout>
  );
}
