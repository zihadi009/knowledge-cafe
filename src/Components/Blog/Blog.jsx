import { PiBookmarkSimpleLight } from "react-icons/pi";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 md:w-3/4">
      <img src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between my-6">
        <div className="flex gap-6">
          <img className="w-14" src={author_img} alt="" />
          <div className="text-left">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex">
          <span>{reading_time} min read</span>
          <p
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-2xl"
          >
            <PiBookmarkSimpleLight />
          </p>
        </div>
      </div>
      <h2 className="text-4xl text-left leading-relaxed">{title}</h2>
      <p className="text-start my-3">
        {hashtags.map((hash, idx) => (
          <span className="mr-3" key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
        <div>
          <button
            onClick={() => handleMarkAsRead(id, reading_time)}
            className="text-sm border-b-2 my-3"
          >
            Mark as read
          </button>
        </div>
      </p>
    </div>
  );
};

export default Blog;
