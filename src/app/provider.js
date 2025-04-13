'use client';

import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { fetchJobsStart, fetchJobsSuccess, fetchJobsFailure } from "./store/slices/jobsSlice"

function Initializer({ children }) {

    useEffect(() => {
        // Initialize any global state or settings here
        console.log("Redux Provider Initialized");
        //Fetch jobs data then set it.
        store.dispatch({ type: 'jobs/fetchJobsStart'});
        
        fetch('http://localhost:3001/jobs')
            .then(response => response.json())
            .then(data => {
                store.dispatch({ type: 'jobs/fetchJobsSuccess', payload: data })
            })
            .catch(error => {
                store.dispatch({ type: 'jobs/fetchJobsFailure', payload: error.message });
            });
    }, []);
    return <>{children}</>;
}

export function ReduxProvider({ children }) {
    return (
        <Provider store={store}> 
            <Initializer> 
                { children }
            </Initializer>
        </Provider>
    )
}