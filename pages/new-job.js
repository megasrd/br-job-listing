"use client";

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ProtectedRoute from '../src/app/components/Auth/ProtectedRoute'

import '../styles/pages/index.scss';

export default function Home() {

  const router = useRouter();

  return (
    <ProtectedRoute>
      <h2 className='title'> Post a New Job </h2>
    </ProtectedRoute>
  );
}
