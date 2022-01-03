import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userAuth: [],
        loading: true,
        loading2: true,
    },
    reducers: {
        addUserAuth: (state, action) => {
            state.userAuth = action.payload
        },
        removeUserAuth: (state, action) => {
            state.userAuth = action.payload
        },
        handleLoading: (state, action) => {
            state.loading = action.payload
        },
        handleLoading2: (state, action) => {
            state.loading2 = action.payload
        },
    }
})
export const { addUserAuth, removeUserAuth, handleLoading, handleLoading2 } = userSlice.actions
export default userSlice.reducer