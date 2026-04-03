import "./App.css";
import Ex01_Count from "./components/Ex01_Count";
import Ex02_Form from "./components/Ex02_Form";
import Ex03_Object from "./components/Ex03_Object";

function App() {
  return (
    <>
      {/* 1. 숫자 증가 감소 */}
      {/* <Ex01_Count /> */}

      {/* 2. Form 요소 state로 관리하기 */}
      {/* <Ex02_Form /> */}

      {/* 3. Form 요소 state object로 관리하기 */}
      <Ex03_Object />
    </>
  );
}

export default App;
