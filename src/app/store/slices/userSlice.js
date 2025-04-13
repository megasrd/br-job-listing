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
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.isValid = false;
            state.avatar = null;
            state.email = null;
            state.username = null;
            localStorage.removeItem('user');
        }
    }
});

export const { fetchUserSuccess, fetchUserFailure } = userSlice.actions;

export const login = (username, password) => (dispatch) => {
    const credentials = {
        username: 'admin',
        password: 'password'
    };
    if (username === credentials.username && password === credentials.password) {
        const user = {
            username: username,
            email: 'testing@bluerobot.com',
            avatar: 'https://placehold.co/50'
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(fetchUserSuccess(user));
        return true;        
    } else {
        dispatch(fetchUserFailure('Invalid'));
        return false;
    }
}

export const checkUser = () => (dispatch) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        dispatch(fetchUserSuccess(user));
        return true;
    } else {
        dispatch(fetchUserFailure('Invalid'));
        return false;
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('user');
    dispatch(userSlice.actions.logout());
}

export default userSlice.reducer;