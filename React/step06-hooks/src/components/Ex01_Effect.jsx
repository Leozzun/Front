import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Ex01_Effect() {
  const [no, setNo] = useState(0);
  const [str, setStr] = useState("");

  useEffect(() => {
    console.log("1.useEffect call -  mount 될때 호출됨..");
  });

  useEffect(() => {
    console.log("2.useEffect call -  최초의 딱 한번 mount 될때만 호출됨..");
  }, []);

  useEffect(() => {
    console.log("3.userEffect call - 최초 + str값이 update 될때만 호출됨..");
  }, [str]);

  useEffect(() => {
    console.log(
      "4.userEffect call - 최초 + str, no 값이 update 될때만 호출됨..",
    );
  }, [str, no]);

  return (
    <div>
      <h3>useEffect 연습하기</h3>
      <h4>no : {no} </h4>
      <button onClick={() => setNo(no + 1)}>클릭1</button>
      <hr />
      <h4>no : {no} </h4>
      <button onClick={() => setStr("배고프다")}>클릭2</button>
    </div>
  );
}

export default Ex01_Effect;
