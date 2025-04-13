import { createSlice } from '@reduxjs/toolkit';

const jobsSlice = createSlice({
    name: 'jobs',
    initialState: {
        value: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchJobsStart(state) {
            state.loading = true;
            state.error = null;
        }
    },
});