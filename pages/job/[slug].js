import { useRouter } from 'next/router';
import Layout from '../../src/app/layout';
 
export default function Page() {
  const router = useRouter()
  return (
    <Layout>
      <p>Post: {router.query.slug}</p>
    </Layout>
  );  
}