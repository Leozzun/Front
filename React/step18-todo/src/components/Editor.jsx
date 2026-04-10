import { useState } from "react";
import "./Editor.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/store";

const Editor = () => {
  const [content, setContent] = useState("");
  const contentRef = useRef(); //DOM요소 접근

  // const { onCreate } = useContext(TodoDispatchContext);

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }

    dispatch(
      addItem({
        id: Date.now(),
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }),
    ); // 부모 쪽 함수 호출(입력한 내용 전달)
    setContent(""); // 내용 비우기
  };

  const onkeydown = (e) => {
    //enter 키 코드 = 13
    if (e.keyCode === 13) {
      onSubmit();
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
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
