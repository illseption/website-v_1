import React from "react";
import bookData from "../data/books.json";
import Layout from "../components/layout";
import "../styles/readingList.scss";

interface Book {
  name: String;
  read?: Boolean;
  reading?: Boolean;
};

const ReadingList = () => {
  const bookList: Book[] = bookData;
  return(
    <Layout>
      <div className="reading-list">
        <h3>Reading List / 2023</h3>
        <div className="legend">
          <p>Normal: <span>To be read</span></p>
          <p>Bold: <span style={{fontWeight: "bold"}}>Reading</span></p>
          <p>Faded: <span style={{color: "#767676"}}>Finished</span></p>
        </div>
        <ul>
          {bookList.map((data: Book) => (
            <li>
              <span className={data.read ? "read" : data.reading ? "reading" : "unread"}>{data.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  ) 
};

export default ReadingList;