import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import "./List.css";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const getFilterData = () => {
    if (search === "") return todos;

    const searchedTodos = todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
    return searchedTodos;
  };

  const filterTodos = getFilterData(); //전체 todos or filter 된 todos

  return (
    <div className="List">
      <h4>Todo List🌴</h4>
      <input
        placeholder="검색어를 입력해주세요."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="todos_wrapper">
        {filterTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
