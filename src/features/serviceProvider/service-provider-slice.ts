
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderRepository } from "../../modules/orders/domain/repositories/order-repository";
import { OrderService } from "../../modules/orders/domain/services/order-service";
import ProviderRepository from "../../provider/domain/repository/provider-repository";
import RegisterSupplier from "../../provider/domain/services/register-supplier";
import { Providers } from "../../provider/providers";


const configProviders = new Providers(
    {
        "ORDER-SERVICE": new RegisterSupplier<OrderRepository>({
            config: {
                injector: new OrderService()
            }
        }),
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