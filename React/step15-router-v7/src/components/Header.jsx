import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();
  const btn1 = function () {
    //기능(유효성체크... 성공하면 페이지 전환, 아니면 메시지출력)
    //이동
    nav("/");
  };

  const btn2 = function () {
    nav("/user/50");
  };

  const btn3 = function () {
    nav("/admin");
  };

  return (
    <div style={{ border: "1px red solid" }}>
      <h1>Header 영역입니다.</h1>
      <Link to={"/"}>HOME</Link> &nbsp;&nbsp;&nbsp;
      <Link to={"/user/Leo"}>USER</Link> &nbsp;&nbsp;&nbsp;
      <Link to={"/admin"}>Admin</Link> &nbsp;&nbsp;&nbsp;
      <hr />
      <a href="/">HOME</a> &nbsp;&nbsp;&nbsp;
      <a href="/user/hong">USER</a> &nbsp;&nbsp;&nbsp;
      <a href="/admin">Admin</a> &nbsp;&nbsp;&nbsp;
      <hr />
      <button onClick={btn1}>클릭1</button> &nbsp;&nbsp;&nbsp;
      <button onClick={btn2}>클릭2</button> &nbsp;&nbsp;&nbsp;
      <button onClick={btn3}>클릭3</button> &nbsp;&nbsp;&nbsp;
    </div>
  );
}

export default Header;
