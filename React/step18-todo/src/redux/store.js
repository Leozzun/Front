import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: 0,
      isDone: false,
      content: "React study",
      date: new Date().getTime(),
    },
    { id: 1, isDone: false, content: "친구만나기", date: new Date().getTime() },
    { id: 2, isDone: false, content: "낮잠자기", date: new Date().getTime() },
  ],
  reducers: {
    //추가하기
    addItem(state, action) {
      state.push(action.payload);
    },

    //삭제하기
    deleteItem(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },

    //수정하기 (체크박스)
    updateItem(state, action) {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo,
      );
    },
  },
});

export const { addItem, deleteItem, updateItem } = todoSlice.actions;

export default configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
