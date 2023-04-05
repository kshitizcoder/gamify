import { createSlice } from "@reduxjs/toolkit";




export const GameSlice = createSlice({
    name: "games",
    initialState: {
        data: {
            shooter: [],
            racing: [],
            fantasy: [],
            fighting: [],
            sports: [],
            platform: [],
            games: [],
            search: [],
            details: []

        },
        isLoading: false,
        isError: false
    },
    reducers: {
        fetchInitiate: (state, action) => {
            state.isLoading = true
        },
        fetchSuccess: (state, action) => {

            state.isLoading = false
            state.data.shooter = action.payload.shooter;
            state.data.racing = action.payload.racing
            state.data.sports = action.payload.sports
            state.data.fantasy = action.payload.fantasy
            state.data.fighting = action.payload.fighting
            state.data.games = action.payload.games




        },
        fetchGames: (state, action) => {
            state.isLoading = false
            state.data.platform = action.payload.platform
            state.data.search = action.payload.search
            state.data.details = action.payload.details
        },
        fetchFailed: (state, action) => {
            state.isLoading = false
            state.isError = true
        }
    },

});



export const { fetchInitiate, fetchSuccess, fetchFailed, fetchGames } = GameSlice.actions;