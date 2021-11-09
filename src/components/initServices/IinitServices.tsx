import { Children, ReactChild, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadITems } from "../../features/items/items-slice";
import { setMsg } from "../../features/msg/global-msg-slice";
import { setIsload } from "../../features/msg/loadComponents/load-components-slice";


type InitServicesProps = {

    children: any
}

export const InitServices = ({ children }: InitServicesProps) => {

    const PROVIDER = useAppSelector(({ serviceProvider }) => serviceProvider.value);
    const dispatch = useAppDispatch()
    const searchValue = useAppSelector(({ search }) => search.value);


    const getItems = async () => {

        try {
            const data = await PROVIDER.providingService("ORDER-SERVICE").execute().getItems(searchValue);
            if (!data) {
                dispatch(setMsg("Sin resultados"));
            } else {
                dispatch(setIsload(true));
                dispatch(loadITems(data));
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getItems();
    }, [searchValue]);


    return (

        <>
            {children}
        </>
    )


}