import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type SearchState = {

    value: string;
}


const initialState: SearchState = {
    value: ''
}

export const searchSlice = createSlice({

    name: 'search',
    initialState,
    reducers: {
        query: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});


export const { query } = searchSlice.actions;

export default searchSlice.reducer;