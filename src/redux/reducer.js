import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id:1,
    item:"Sing in the shower",
    completed: true
  },
  {
    id:2,
    item:"Clean the compound",
    completed: false
  },
  {
    id:3,
    item:"Travel to Japan",
    completed: false
  },
  {
    id:4,
    item:"Learn Ruby",
    completed: true
  },
  {
    id:5,
    item:"Cleab the car",
    completed: false
  }];


const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;