import React from "react";
import { useState, useRef } from "react";

function Ex05_Ref() {
  console.log("Ex05_Ref() cal..... 랜더링");

  // 값이 변경될때마다 rerendering 된다.
  const [count, setCount] = useState(0); //count

  //값이 변경 되어도 rerendering이 되지않는다.
  const countRef = useRef(0); //countRef.current

  //useEffect 안에서는 상태를 바꾸는 걸 하면 안된다

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
        <button onClick={() => (countRef.current = countRef.count + 1)}>
          ref Up
        </button>
      </p>
    </div>
  );
}

export default Ex05_Ref;
