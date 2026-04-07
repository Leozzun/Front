import React from "react";
import { useState, useRef } from "react";

let letCount = 0; //전역 필드

function Ex07_Ref() {
  console.log("Ex05_Ref() cal..... letCount" + letCount);

  // 값이 변경될때마다 rerendering 된다.
  const [count, setCount] = useState(0); //count
  const [renderCount, setRenderCount] = useState(1);

  //값이 변경 되어도 rerendering이 되지않는다.
  const countRef = useRef(0); //countRef.current

  return (
    <div>
      <h2>useState vs useRef 차이 </h2>
      <p>
        useState: {count}
        <button onClick={() => setCount(count + 1)}>state Up</button>
      </p>
      <hr />
      <p>
        useRef: {countRef.current}
        <button onClick={() => (countRef.current = countRef.current + 1)}>
          ref Up
        </button>
      </p>
      <hr />
      <p>
        letCount: {letCount}
        <button onClick={() => (letCount = letCount + 1)}>let Up</button>
      </p>
    </div>
  );
}

export default Ex07_Ref;
