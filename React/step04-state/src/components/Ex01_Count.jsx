import React from "react";
import { useState } from "react";

function Ex01_Count() {
  let i = 0;

  //useState의 리턴은 배열이 [초기값, 변경함수]

  const [no, setNo] = useState(0);
  console.log(no);
  console.log(setNo);

  const minusClick = function () {
    i--;
    // console.log("minusClick");
    // console.log(i);

    // state 값 변경
    setNo(no - 1);
  };

  const plusClick = function () {
    i++;
    // console.log("plusClick");
    // console.log(i);
    setNo(no + 1);
  };

  return (
    <div>
      <h2>숫자 증가 or 감소</h2>
      <button onClick={minusClick}>빼기</button>
      <span>
        no = {no} / i = {i}
      </span>
      <button onClick={plusClick}>더하기</button>
    </div>
  );
}

export default Ex01_Count;
