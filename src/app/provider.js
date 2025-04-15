'use client';

import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { checkUser } from "../app/store/slices/userSlice";
import axios from 'axios';

function Initializer({ children, store }) {
    useEffect(() => {
        console.log("Fetching jobs data...");
        store.dispatch({ type: 'jobs/fetchJobsStart'});
        
        axios.get('https://job-mongo-db-a076e6ade381.herokuapp.com/jobs', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => {
            store.dispatch({ type: 'jobs/fetchJobsSuccess', payload: response.data })
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