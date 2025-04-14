"use client";


import '../../styles/global.scss';

import { useEffect } from 'react';
import { checkUser } from "../app/store/slices/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import NavigationBar from "./components/NavigationBar/NavigationBar.js";

export default function Layout({ children }) {
  // Check if user is logged in on every page load
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser())
  }, []);

  return (   
    <>
      <NavigationBar />
      <div className="container page-wrapper">
        {children}
      </div>   
    </>
  );
}
