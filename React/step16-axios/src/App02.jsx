import "./App.css";
import axiosInstance from "./api/axiosInstance";
import axios from "axios";
import { useEffect } from "react";

function App02() {
  useEffect(() => {
    //
    axios.post("http://localhost:4000/posts", { title: "집에 갑시다." });
  }, []);

  const axiosSelectAll = async () => {
    try {
      const result = await axiosInstance.get("/users/");
      console.log(result.data);
      result.data.forEach((user, index) => {
        console.log(
          index + " = " + user.id + " | " + user.name + " | " + user.email,
        );
      });
    } catch (err) {
      console.log(err);
    }
  };

  const axiosSelectById = async () => {
    try {
      const result = await axiosInstance({
        method: "GET",
        url: "/users/5",
      });
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Axios Test</h1>
      <button onClick={axiosSelectAll}>axios - selectAll</button>
      <button onClick={axiosSelectById}>axios - selectById</button>

      <h3> Spring boot 연동하기(CRUD)</h3>
      {/* <button onClick={insertUser}>post - user등록</button>
      <button onClick={deleteUser}>delete - user삭제</button>
      <button onClick={updateUser}>put - user수정</button>
      <button onClick={getbyId}>get - user 부분조회 </button>
      <button onClick={getUsers}>get - user전체조회</button> */}
    </>
  );
}

export default App02;
