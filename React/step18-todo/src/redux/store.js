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
      state.push(action.payload); //끝에 추가
      // state.unshift(action.payload); //앞에 추가
    },

    //삭제하기
    deleteItem(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
      // const index = action.payload; //id의 값이 전달
      // state.splice(index, 1); // 두 번째 인자 1은 삭제할 요소의 개수
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
