import React from "react";
import Book from "./Book";

function Ex02_Library() {
  const author = { name: "John Doe", age: 45, addr: "Seoul" };
  return (
    <div>
      <Book bookName="Spring" numPage={200} author={author} />
      <Book
        bookName="React 책"
        numPage={150}
        author={{ name: "홍길동", age: 35, addr: "Busan" }}
      />
      <Book numPage={250} author={author} />
    </div>
  );
}

export default Ex02_Library;
