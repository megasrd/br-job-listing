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
        },
        fetchJobsSuccess(state, action) {
            state.loading = false;
            state.value = action.payload;
        },
        fetchJobsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { fetchJobsStart, fetchJobsSuccess, fetchJobsFailure } = jobsSlice.actions;
export default jobsSlice.reducer;