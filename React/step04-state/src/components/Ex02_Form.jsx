import React from "react";
import { useState } from "react";

function Ex02_Form() {
  const [name, setName] = useState("준화");
  const [age, setAge] = useState(0);
  const inputName = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    console.log(e.target);
    setName(e.target.value);
  };

  const inputAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <h1>폼 입력 값 - state TEST 하기</h1>
      이름 :
      <input type="text" name="userName" value={name} onChange={inputName} />
      나이 :{" "}
      <input
        type="text"
        name="age"
        value={age == 0 ? "" : age}
        onChange={inputAge}
      />
      <hr />
      <h3>
        당신의 이름 {name} 이고 나이는 {age} 입니다
      </h3>
    </div>
  );
}

export default Ex02_Form;
