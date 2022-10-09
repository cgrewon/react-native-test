import { UPDATE_SEARCH_KEY} from '../action_types';


const initialState = {
  searchKey: null,
  
};

const SearchKeyReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case UPDATE_SEARCH_KEY:
        return {
            ...state,
            searchKey: action.payload
        }
        break;
    default :
        return state;
  }
};


export default SearchKeyReducer;
