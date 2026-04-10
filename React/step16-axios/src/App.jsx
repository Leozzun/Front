import "./App.css";
import axios from "axios";

const serverIp = import.meta.env.VITE_API_SERVER_IP;

function App() {
  console.log(serverIp);
  const selectAll = async () => {
    try {
      const res = await fetch(serverIp + "/users");
      console.log(res);
      const jsonResult = await res.json();
      jsonResult.forEach((user, index) => {
        console.log(
          index + " = " + user.id + " | " + user.name + " | " + user.email,
        );
      });
    } catch (err) {
      console.log(err);
    }
  };

  //axios 사용하기 //////////////
  const axiosSelectAll = async () => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((result) => {
    //     console.log(result.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
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
    // axios({
    //   method: "GET",
    //   url: "https://jsonplaceholder.typicode.com/users/5",
    //   //data:
    // })
    //   .then((result) => {
    //     console.log(result.data);
    //   })
    //   .catch((err) => console.log(err));

    //위 코드 async와 await로 변경해보자

    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users/5",
      );
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Axios Test</h1>
      <button onClick={selectAll}>get - selectAll</button>
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

export default App;
