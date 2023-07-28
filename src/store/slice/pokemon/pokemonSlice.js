import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        isLoading: false,
        page: 0,
        pokemons: [],

    },
    reducers: {
        startLoadingPokemons: (state) => {
          state.isLoading = true;
        },
        setPokemon: (state, action ) => {
            state.isLoading = false;
            state.pokemons = action.payload.pokemons;
            state.page = action.payload.page;
        },
    }
});

// Action creators are generated for each case reducer function
export const { setPokemon, startLoadingPokemons } = pokemonSlice.actions;