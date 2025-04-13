'use client';

import { useEffect } from 'react';
import { Provider } from 'react-redux';

function Initializer({ children, store }) {
    useEffect(() => {
        //Fetch jobs data then set it.
        //dispatch intial action
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
    return <Provider store={store}>{children}</Provider>;
}

export function ReduxProvider({ children, store }) {
    return (
        <Initializer store={store}> 
            { children }
        </Initializer>
    )
}