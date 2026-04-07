import React from "react";
import { useEffect } from "react";

function Ex02_Timer() {
  useEffect(() => {
    const timeStop = setInterval(() => {
      console.log("타이머가 실행중입니다.");
    }, 1000);

    return () => {
      console.log("자원 정리해요.");

      clearInterval(timeStop);
    };
  });

  return (
    <>
      <span>타이머를 시작합니다. ~~ 콘솔을 확인해주세요.</span>
    </>
  );
}

export default Ex02_Timer;
