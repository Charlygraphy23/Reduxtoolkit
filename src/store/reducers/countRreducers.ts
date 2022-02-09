import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
};

const countSlice = createSlice({
  name: "countSlice",

  initialState,

  reducers: {
    increaseCount: (state) => {
      return {
        ...state,
        count: state.count + 1
      };
    },

    decreaseCount: (state) => {
      return {
        ...state,
        count: state.count - 1
      };
    },
    increaseByValue: (state, actions) => {
      return {
        ...state,
        count: state.count + actions.payload
      };
    }
  }
});

export default countSlice.reducer;
export const {
  decreaseCount,
  increaseCount,
  increaseByValue
} = countSlice.actions;
