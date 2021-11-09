import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CustomerSchema } from "../../components/customer/customer-schema";

export interface CustomerState {

    value: CustomerSchema,

}

const initialState: CustomerState = {
    value: {
        type_id_customer: "",
        id_customer: "",
        name_customer: "",
        dane: "",
        department: "",
        city: "",
        neighbourhood: "",
        shipping_address: "",
        shipping_address_complement: "",
        campaign: "",
        record_date: "",
        enrollment_date: "",
        shipping_date: "",
    }
}


export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        setCustomer: (state, action: PayloadAction<CustomerState>) => {
            state.value = action.payload.value;
        }
    }
});


export const { setCustomer } = customerSlice.actions;

export default customerSlice.reducer;