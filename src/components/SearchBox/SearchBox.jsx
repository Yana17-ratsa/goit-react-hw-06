import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = (
    // {value, onFilter}
) => {

    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.name);

    const handleFilterChandge = (filter) => {
        dispatch(changeFilter(filter));
    }

    return(
        <div className={css.searchContainer}>
            <p>Find contacts by name</p>
            <input type="text" value={filter} onChange={(e) => handleFilterChandge(e.target.value)}/>
        </div>
    )
}
export default SearchBox;