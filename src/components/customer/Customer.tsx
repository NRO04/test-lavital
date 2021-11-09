import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCustomer } from "../../features/customer/customer-slice";


export const Customer = () => {


    const { id_customer, name_customer, shipping_address, shipping_address_complement, city, department } = useAppSelector(({ customer }) => customer.value);

    const PROVIDER = useAppSelector(({ serviceProvider }) => serviceProvider.value);
    const search = useAppSelector(({ search }) => search.value);
    const dispatch = useAppDispatch();

    const getCustomer = async () => {

        /*
        */
        const response = await PROVIDER.providingService("ORDER-SERVICE").execute().getInvoice(search);
        dispatch(setCustomer({ value: response }));
    }

    useEffect(() => {
        getCustomer();
    }, [search]);

    return (
        <div className="flex flex-dir-col gap-30 item" style={{ padding: "3rem" }}>
            <div>
                <h4>INFORMACION DE CLIENTE</h4>

            </div>
            <hr />

            <div className="flex flex-dir-col gap-20">
                <span>
                    # {id_customer}
                </span>
                <span>
                    {name_customer}
                </span>

            </div>

            <hr />

            <div className="flex flex-dir-col gap-20">

                <strong>
                    DIRECCION
                </strong>
                <span>
                    {shipping_address} ( {shipping_address_complement} )
                    <br />
                    {city}, {department}
                </span>

            </div>
        </div>
    );
}