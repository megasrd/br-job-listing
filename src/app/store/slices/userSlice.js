import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        avatar: null,
        email: null,
        username: null,
        isLoggedIn: false,
        isValid: false,
        error: null
    },
    reducers: {
        fetchUserSuccess: (state, action) => {
            state.isLoading = false;
            state.avatar = action.payload.avatar;
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.isLoggedIn = true;
            state.isValid = true;
        },
        fetchUserFailure: (state, action) => {
            state.isValid = false;
            state.isLoggedIn = false;
            state.error = action.payload;
        }        
    }
});

export const { fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;