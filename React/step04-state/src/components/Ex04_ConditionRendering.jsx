import React from "react";
import { useState } from "react";
import Ex01_Count from "./Ex01_Count";
import Ex02_Form from "./Ex02_Form";

const Ex04_ConditionRendering = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <h3>ConditionRender Test</h3>
      <buttom onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </buttom>
      <hr />
      {isLogin ? <Ex01_Count /> : <Ex02_Form />}
    </div>
  );
};

export default Ex04_ConditionRendering;
