import "./App.css";

function App() {
  //javaScript코드 작성
  const message = "집에 가고싶다!";

  const student = {
    stno: 10,
    name: "홍길동",
    addr: "오리",
    age: 25,
  };
  console.log(student);

  //css 적용
  const cssStyle = {
    color: "blue",
    backgroundColor: "pink",
    border: "double red 5px",
  };

  const fun1 = () => {
    console.log("클릭1 눌렸어요.");
  };

  //컴포넌트 내부의 return전에 jsx문법 사용가능
  const name = "홍길동";
  const arr = [1, 2, 3, 4, 5];

  const addr = "";

  return (
    <>
      <h1 style={cssStyle}>JSX문법 공부하기</h1>
      <h3 id="b">메세지 : {message}</h3>
      {/* student jsx문법에 속성없이 출력됨 */}
      <h3 class="test">
        학생정보 : {student.name} / {student.addr}
      </h3>
      <h3>
        true : {true} / {null} / {undefined}
      </h3>
      <h4 style={{ color: "red", backgroundColor: "yellow" }}>css 적용하기</h4>
      <a href="#">클릭1</a>
      <br></br>
      <a href="#">클릭2</a>
      <hr />
      <button onClick={fun1}>클릭1</button>
      <button
        onClick={() => {
          console.log("클릭 2가 눌러졌어요.");
        }}
      >
        클릭2
      </button>
      {name}
      <hr />
      {student.age > 18 ? (
        <h3 style={{ color: "blue" }}> {student.name}님은 성인입니다.</h3>
      ) : (
        <h3 style={{ color: "red" }}> {student.name}님은 미성년자입니다.</h3>
      )}
      {/* 나이가 18보다 크면 모든 서비스를 이용해주세요. */}
      {student.age > 18 && <h4>모든 서비스를 이용해주세요</h4>}
      <h5>{arr}</h5>
    </>
  );
}

export default App;
