import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface ItemsState {
    value: Array<object>;
}


const initialState: ItemsState = {

    value: [{ "name": "RO", "value": "RO" }, { "name": "US", "value": "US" }]
}


export const itemsSlice = createSlice({

    name: "items",
    initialState,
    reducers: {

        loadITems: (state, action: PayloadAction<Array<object>>) => {
            state.value = action.payload;
        }
    }

});


export const { loadITems } = itemsSlice.actions;
export default itemsSlice.reducer;