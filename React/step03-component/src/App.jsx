import "./App.css";
import Ex01_Export from "./components/Ex01_Export";
import A, { Ex01_Export2 } from "./components/Ex01_Export";
import { num } from "./components/Ex01_Export";
import Ex02_Library from "./components/Ex02_Library";
import Ex03_ButtonTest from "./components/Ex03_ButtonTest";

//컴포넌트 작성

function Header() {
  return (
    <>
      <h3>헤더영역입니다. : {num}</h3>
    </>
  );
}

const Footer = function () {
  return (
    <>
      <h3>푸터영역입니다.</h3>
    </>
  );
};

function App() {
  return (
    <>
      <h1>Component 실습하기</h1>
      {/* <Header />
      <Ex01_Export />
      <Ex01_Export2 />
      <Footer /> */}

      {/* <Ex02_Library /> */}

      <Ex03_ButtonTest />

      {/* 외부의 ~.jsx 컴포넌트 사용하기 */}
    </>
  );
}

export default App;
