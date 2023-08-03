import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types.js";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.myFavorites, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (element) => element.id !== Number(action.payload)
        ),
      };
    case FILTER:
      return {
        ...state,
        myFavorites:
          action.payload === "All"
            ? state.allCharacters
            : state.allCharacters.filter((char) => {
                return char.gender === action.payload;
              }),
      };
    case ORDER:
      const copyChar = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? copyChar.sort((a, b) => a.id - b.id)
            : copyChar.sort((a, b) => b.id - a.id),
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
