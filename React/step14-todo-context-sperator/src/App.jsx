import { useState, useRef, useReducer, useMemo } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import Ex01_Count from "./components/Ex01_Count";
import { createContext } from "react";

const mockData = [
  { id: 0, isDone: false, content: "React study", date: new Date().getTime() },
  { id: 1, isDone: false, content: "친구만나기", date: new Date().getTime() },
  { id: 2, isDone: false, content: "낮잠자기", date: new Date().getTime() },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo,
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      return state;
  }
};

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3); // 상태 관리

  //추가하기
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  //수정하기
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  };

  //삭제하기
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  const memoizedDispatch = useMemo(
    () => ({ onCreate, onDelete, onUpdate }),
    [],
  );

  return (
    <div className="App">
      <Header />
      <TodoStateContext value={todos}>
        <TodoDispatchContext value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext>
      </TodoStateContext>
    </div>
  );
}

export default App;
