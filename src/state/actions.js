import { UPDATE_SEARCH_KEY } from "./action_types";


export const updateSearchKey = (searchKey) => {
  return {
    type: UPDATE_SEARCH_KEY,
    payload: searchKey,
  };
};
