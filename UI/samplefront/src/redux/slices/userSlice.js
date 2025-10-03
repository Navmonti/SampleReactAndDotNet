import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunks for CRUD operations
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axios.get('/api/users');
    return response.data;
});

export const createUser = createAsyncThunk('user/createUser', async (user) => {
    const response = await axios.post('/api/users', user);
    return response.data;
});

export const updateUser = createAsyncThunk('user/updateUser', async ({ id, user }) => {
    const response = await axios.put(`/api/users/${id}`, user);
    return response.data;
});

export const deleteUser = createAsyncThunk('user/deleteUser', async (id) => {
    await axios.delete(`/api/users/${id}`);
    return id;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Users
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Create User
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Update User
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.users.findIndex(u => u.id === action.payload.id);
                if (index !== -1) state.users[index] = action.payload;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Delete User
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.filter(u => u.id !== action.payload);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;