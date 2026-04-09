import React from "react";
import { useState, use } from "react";
import "./Editor.css";
import { useRef } from "react";
import { TodoDispatchContext } from "../App";
import { useContext } from "react";

const Editor = () => {
  const [content, setContent] = useState("");
  const contentRef = useRef(); //DOM요소 접근

  const { onCreate } = useContext(TodoDispatchContext);

  const onSumbit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }

    onCreate(content); // 부모 쪽 함수 호출(입력한 내용 전달)
    setContent(""); // 내용 비우기
  };

  const onkeydown = (e) => {
    //enter 키 코드 = 13
    if (e.keyCode === 13) {
      onSumbit();
    }
  };

  return (
    <div className="Editor">
      <input
        type="text"
        placeholder="새로운 todo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        ref={contentRef}
        onKeyDown={onkeydown}
      />
      <button onClick={onSumbit}>추가</button>
    </div>
  );
};

export default Editor;
