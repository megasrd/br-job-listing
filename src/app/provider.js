'use client';

import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { checkUser } from "../app/store/slices/userSlice";

function Initializer({ children, store }) {
    useEffect(() => {
        console.log("Fetching jobs data...");
        //Fetch jobs data then set it.
        //dispatch intial action
        store.dispatch({ type: 'jobs/fetchJobsStart'});
        fetch('https://job-mongo-db-a076e6ade381.herokuapp.com/jobs')
            .then(response => response.json())
            .then(data => {
                store.dispatch({ type: 'jobs/fetchJobsSuccess', payload: data })
            })
            .catch(error => {
                store.dispatch({ type: 'jobs/fetchJobsFailure', payload: error.message });
            });
    }, []);
    return (
        <>
            {children}
        </>
    );
}

function CheckLogin (){
    // Check if user is logged in on every page load
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkUser())
    }, [dispatch]);   
}

export function ReduxProvider({ children, store }) {
    return (
        <Provider store={store}>
            <CheckLogin></CheckLogin>
            <Initializer store={store}> 
                { children }
            </Initializer>            
        </Provider>
    )
}