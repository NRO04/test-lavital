import { BaseSyntheticEvent } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { query } from "../../features/search/search-slice";


export const Search = () => {

    const SEARCH = useAppSelector(({ search }) => search.value);
    const dispatch = useAppDispatch()


    const handleSearch = ({ target }: BaseSyntheticEvent) => {

        dispatch(query(target.value));
    }

    return (
        <>
            <div className="flex pd-50 jc-center align-i-center">
                <input className="input-el" style={{ width: "30%" }} type="text" placeholder="Buscar Orden" onChange={handleSearch} />
            </div>
        </>
    );

}