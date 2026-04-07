import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";

const Ex07_Ref = () => {
  // 값이 변경될때마다 rerendering 된다.
  const [count, setCount] = useState(0); //count
  //   const [totalreRenCount, setTotalreRenCount] = useState(0);

  //값이 변경 되어도 rerendering이 되지않는다.
  const countRef = useRef(0); //countRef.current

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  return (
    <div>
      <h3>총 리랜더링 횟수 TEST </h3>
      <p>
        Count : {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Up
        </button>
      </p>

      <p>렌더링 횟수: {countRef.current}</p>
    </div>
  );
};

export default Ex07_Ref;
