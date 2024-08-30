import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookMarks, readingTime }) => {
  // console.log(bookmarks)
  return (
      <div className="md:w-1/3 bg-gray-300 ml-4 mt-8">
        <div className="bg-red-400 mb-4 p-6 rounded">
            <h3 className="text-2xl">Total Time on Read: {readingTime} min</h3>
        </div>
        <h2 className="text-2xl">BookMarked Blogs: {bookMarks.length} </h2>
        {bookMarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
  );
};

export default Bookmarks;
