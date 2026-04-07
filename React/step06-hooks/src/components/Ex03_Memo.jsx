import React from "react";
import { useMemo } from "react";
import { useState } from "react";

function Ex03_Memo() {
  const [list, setLiset] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const getSumResult = () => {
    console.log("getSumResult call....");

    let sum = 0;
    list.forEach((i) => {
      sum += i;
    });
    return sum;
  };

  ///// useMemo 사용하기 /////////////////////
  const memoResult = useMemo(() => {
    console.log("useMemo call....");

    let sum = 0;
    list.forEach((i) => {
      sum += i;
    });
    return sum;
  }, [list]);

  return (
    <div>
      <h3>useMemo TEST</h3>
      {list.map((no, i) => (
        <h5 key={i}>{no}</h5>
      ))}
      {/* <h3>합계 : {getSumResult()}</h3> */}
      <h3>합계 : {memoResult}</h3>
      <button onClick={() => setLiset([10, ...list])}>추가</button>
      <button onClick={() => setLiset([...list])}>str값변경</button>
    </div>
  );
}

export default Ex03_Memo;
