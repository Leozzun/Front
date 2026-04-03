import React from "react";

export default function Book({ numPage, bookName, author }) {
  // console.log(props);
  return (
    <>
      <h1>이 책은 {bookName} 책입니다.</h1>
      <h3>이 책의 총 페이지 수는 {numPage} 페이지로 이뤄져 있습니다.</h3>
      <h4>
        저자 {author.name} / {author.age} / {author.addr}
      </h4>
    </>
  );
}
