import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemsSchema } from "../../components/orders/item/item-schema";


export interface ItemsState {
    value: Array<ItemsSchema>;
}

const initialState: ItemsState = {

    value: []
}

export const itemsSlice = createSlice({

    name: "items",
    initialState,
    reducers: {

        loadITems: (state, action: PayloadAction<Array<ItemsSchema>>) => {
            state.value = action.payload;
        }
    }

});


export const { loadITems } = itemsSlice.actions;
export default itemsSlice.reducer;