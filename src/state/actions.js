import { UPDATE_SEARCH_KEY, UPDATE_TOP10_USERS } from "./action_types";


export const updateSearchKey = (searchKey) => {
  return {
    type: UPDATE_SEARCH_KEY,
    payload: searchKey,
  };
};
export const updateTop10 = (users) => {
  return {
    type: UPDATE_TOP10_USERS,
    payload: users,
  };
};
