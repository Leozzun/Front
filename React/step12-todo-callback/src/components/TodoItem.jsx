import React, { memo } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    //수정하기
    onUpdate(id);
  };

  //삭제 클릭했을때
  const onClickDeleteButton = () => {
    onDelete(id);
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

// export default TodoItem;
export default memo(TodoItem);

// export default memo(TodoItem, () => {
//   return false;
// });

// export default memo(TodoItem, (prevProps, nextProps) => {
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });
