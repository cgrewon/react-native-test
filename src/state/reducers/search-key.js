import { UPDATE_SEARCH_KEY, UPDATE_TOP10_USERS} from '../action_types';


const initialState = {
  searchKey: null,
  top10Users: [],
};

const SearchKeyReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case UPDATE_SEARCH_KEY:
        return {
            ...state,
            searchKey: action.payload
        }
        
    case UPDATE_TOP10_USERS:
        return {
            ...state,
            top10Users: [...action.payload]
        }
        
    default :
        return state;
  }
};


export default SearchKeyReducer;
