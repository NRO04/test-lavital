import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loadITems } from "../../../features/items/items-slice";
import { setMsg } from "../../../features/msg/global-msg-slice";
import { setIsload } from "../../../features/msg/loadComponents/load-components-slice";
import FormDialog from "../../dialog/Dialog";
import { ItemsSchema } from "./item-schema";


export const Items = () => {

    const ITEMS = useAppSelector(({ items }) => items.value); //Redux state Selector
    const searchValue = useAppSelector(({ search }) => search.value); //Redux state Selector
    const dispatch = useAppDispatch();


    return (
        <>
            <div className="flex flex-dir-col gap-20 pd-40 item">
                <h4>ITEMS</h4>

                <FormDialog></FormDialog>

                {ITEMS && ITEMS.map(({ item_name, id_item, shelf_location_code }: ItemsSchema, index: number) => (
                    <div className="flex row gap-40" style={{ borderRadius: "15px", backgroundColor: "#faf7fa" }} key={index}>

                        <div className="flex jc-center align-i-center">
                            <img alt="Sin imagen" />
                        </div>

                        <div className="flex flex-dir-row">

                            <div className="flex flex-dir-col pd-30 gap-10">
                                <div>
                                    <strong>
                                        {item_name}
                                    </strong>
                                </div>
                                <h4>
                                    ID ITEM: {id_item}
                                </h4>
                                <strong>

                                    # ID ITEM

                                </strong>

                            </div>

                            <div className="flex flex-dir-col jc-center align-i-center">
                                <div>
                                    Estantería: {shelf_location_code}
                                </div>
                            </div>

                        </div>
                    </div>
                ))
                }

            </div>
        </>
    );

}