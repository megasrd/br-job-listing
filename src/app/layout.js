"use client";

import { useEffect } from 'react';
import { checkUser } from "../app/store/slices/userSlice";
import { useDispatch } from 'react-redux';
import NavigationBar from "./components/NavigationBar/NavigationBar.js";

export default function Layout({ children }) {
  // Check if user is logged in on every page load
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch]);

  return (   
    <>
      <NavigationBar />
      <div className="container page-wrapper">
        {children}
      </div>   
    </>
  );
}
