
import { createSlice } from "@reduxjs/toolkit";
import ProviderRepository from "../../provider/domain/repository/provider-repository";
import { Providers } from "../../provider/providers";
import {SUPPLIERS} from "../../config/app";


const configProviders = new Providers(
    {
       ...SUPPLIERS
    });


export interface ServiceProviderState {

    value: ProviderRepository;
}


const initialState: ServiceProviderState = {

    value: configProviders
}

export const serviceProviderSlice = createSlice({

    name: "serviceProvider",
    initialState,
    reducers: {}

});


//export const { increment } = counterSlice.actions;

export default serviceProviderSlice.reducer;