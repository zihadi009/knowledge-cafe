
const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-slate-200 p-4 rounded m-4 ">
            <h2 className="text-2xl">{bookmark.title}</h2>
        </div>
    );
};

export default Bookmark;