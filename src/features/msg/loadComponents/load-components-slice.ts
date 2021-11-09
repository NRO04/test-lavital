

import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface IsLoadComponentsState {
    value: boolean;
}

export const initialState: IsLoadComponentsState = {
    value: false,
}


export const isLoadComponentSlice = createSlice({
    name: 'isloadComponet',
    initialState,
    reducers: {

        setIsload: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
})


export const { setIsload } = isLoadComponentSlice.actions;

export default isLoadComponentSlice.reducer;