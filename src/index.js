import react from "react";
import ReactDom from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const Booklist = () => {
  return (
    <>
      <h1 className="h1">Amazon best sellers</h1>
      <section className="bookList">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Booklist />);
