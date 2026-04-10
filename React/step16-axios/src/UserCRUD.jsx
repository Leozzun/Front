import "./App.css";
import axiosInstance from "./api/axiosInstance";
// import axios from "axios";
// import { useEffect } from "react";

function UserCRUD() {
  // useEffect(() => {
  //   //
  //   axios.post("http://localhost:4000/posts", { title: "집에 갑시다." });
  // }, []);

  const insertUser = async () => {
    try {
      const result = await axiosInstance({
        method: "POST",
        url: "/users",
        data: {
          name: "이가현",
          email: "adas@naver.com",
          age: 20,
        },
      });
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async () => {
    try {
      const result = await axiosInstance({
        method: "DELETE",
        url: "/users/1",
      });
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async () => {
    try {
      const result = await axiosInstance({
        method: "PUT",
        url: "/users/2",
        data: {
          name: "홍준화",
          email: "syt09159@gmail.com",
        },
      });
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getbyId = async () => {
    try {
      const result = await axiosInstance({
        method: "GET",
        url: "/users/2",
      });
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUsers = async () => {
    try {
      const result = await axiosInstance({
        method: "GET",
        url: "/users",
      });
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <h1>Axios Test</h1>
      <button onClick={axiosSelectAll}>axios - selectAll</button>
      <button onClick={axiosSelectById}>axios - selectById</button> */}

      <h3> Spring boot 연동하기(CRUD)</h3>
      <button onClick={insertUser}>post - user등록</button>
      <br />
      <br />
      <button onClick={deleteUser}>delete - user삭제</button>
      <br />
      <br />
      <button onClick={updateUser}>put - user수정</button>
      <br />
      <br />
      <button onClick={getbyId}>get - user 부분조회 </button>
      <br />
      <br />
      <button onClick={getUsers}>get - user전체조회</button>
    </>
  );
}

export default UserCRUD;
