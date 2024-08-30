import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";
import Bookmark from "./Components/Bookmark/Bookmark";

function App() {
  const [bookMarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    const exist = bookMarks.find((bookmark) => bookmark.id === blog.id);
    if (exist) {
      return;
    } else {
      setBookmarks([...bookMarks, blog]);
    }
  };

  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    const remaining = bookMarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remaining);
  };
  // console.log(readingTime)
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmark={handleAddToBookmark}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookMarks={bookMarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
