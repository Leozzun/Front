import React from "react";
import { useState } from "react";

function Ex03_Object() {
  const [profile, setProfile] = useState({
    name: "준화",
    age: 25,
    email: "junhua@example.com",
    addr: "서울시 강남구",
  });

  const inputUpdate = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);

    //setProfile(e.target.value);
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>폼 입력 값</h1>
      이름 :{" "}
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={inputUpdate}
      />{" "}
      <br /> <br />
      나이 :{" "}
      <input
        type="text"
        name="age"
        value={profile.age}
        onChange={inputUpdate}
      />{" "}
      <br /> <br />
      이메일 :{" "}
      <input
        type="text"
        name="email"
        value={profile.email}
        onChange={inputUpdate}
      />{" "}
      <br /> <br />
      주소 :{" "}
      <input
        type="text"
        name="addr"
        value={profile.addr}
        onChange={inputUpdate}
      />{" "}
      <br /> <br />
      <hr />
      <h3>입력 정보</h3>
      이름 : {profile.name} / 나이 : {profile.age} / 이메일 : {profile.email} /
      주소 : {profile.addr}
    </div>
  );
}

export default Ex03_Object;
