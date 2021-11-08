import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadITems } from "../../features/items/items-slice";


export const Items = () => {
    const ITEMS = useAppSelector(({ items }) => items.value);
    const PROVIDER = useAppSelector(({ serviceProvider }) => serviceProvider.value);
    const dispatch = useAppDispatch()

    const getItems = async () => {

        const data = await PROVIDER.providingService("ORDER-SERVICE").execute().getItems("FZ0151001985");
        dispatch(loadITems(data));
        console.log(data);
    }

    useEffect(() => {
        getItems();
    }, []);


    return (
        <>
            <div className="flex flex-dir-col gap-20 pd-40 item">
                <h4>ITEMS</h4>

                {ITEMS.map((item, index) => (
                    <div className="flex row gap-40" style={{ borderRadius: "15px", backgroundColor: "#faf7fa" }}>

                        <div className="flex jc-center align-i-center">
                            <img alt="Sin imagen" />
                        </div>

                        <div className="flex flex-dir-row">

                            <div className="flex flex-dir-col pd-30 gap-10">
                                <div>
                                    <strong>
                                        NOMBRE DE ITEM
                                    </strong>
                                </div>
                                <h4>
                                    ID ITEM: 585454
                                </h4>
                                <strong>

                                    # ID ITEM

                                </strong>


                            </div>

                            <div style={{ display: "inline-flex" }}>
                                <div>
                                    CODIGO UBICACION DE ESTANTERIA
                                </div>
                            </div>

                        </div>


                    </div>
                ))}

            </div>
        </>
    );

}