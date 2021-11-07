import { useEffect } from "react";
import { OrderService } from "../domain/services/order-service";


export default function OrdersModule() {


    useEffect(() => {

        //console.log(PROVIDER.providingService("ORDER-SERVICE"));
        //getInvoice("FZ0151010778");

    }, []);


    return (
        <>
            <h1>Orders</h1>
        </>
    );
}