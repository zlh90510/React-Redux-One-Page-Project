import resources from "./resourceEdit";
import visibilityFilter from "./visibilityFilter";
import cruiseList from "./cruises";
import formState from "./toggleForm";
import filters from "./filters"
import {combineReducers} from "redux";

const allReducers = combineReducers({
    cruiseList: cruiseList,
    resources: resources,
    visibilityFilter: visibilityFilter,
    formState: formState,
    filters: filters
});

export default allReducers