import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);
//   console.log(blogs);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3 mt-8">
        {/* <h2>Blogs: {blogs.length}</h2> */}
      {blogs.map((blog) => (
        <Blog handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark} blog={blog} key={blog.id}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
