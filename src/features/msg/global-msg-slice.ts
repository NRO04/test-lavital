import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface GlobalMsgState {
    value: string;
}

export const initialState: GlobalMsgState = {
    value: '¡Encuentra una orden ya mismo!',
}



export const globalMsgSlice = createSlice({
    name: 'globalMsg',
    initialState,
    reducers: {

        setMsg: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})


export const { setMsg } = globalMsgSlice.actions;

export default globalMsgSlice.reducer;