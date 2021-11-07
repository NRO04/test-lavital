import { useEffect } from "react";
import { useAppSelector } from "../../../app/hooks";


export default function OrdersModule() {

    const PROVIDER = useAppSelector(({ serviceProvider }) => serviceProvider.value);

    const getInvoices = async () => {

        try {
            const response = await PROVIDER.providingService("ORDER-SERVICE").execute().getInvoice("FZ0151001985");
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getInvoices();
    });


    return (
        <>
            <h1>Orders</h1>
        </>
    );
}