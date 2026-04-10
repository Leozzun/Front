import React, { memo } from "react";
import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../redux/store";

const TodoItem = ({ id, isDone, content, date }) => {
  const dispatch = useDispatch();
  // const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    //수정하기
    dispatch(updateItem(id));
  };

  //삭제 클릭했을때
  const onClickDeleteButton = () => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);
