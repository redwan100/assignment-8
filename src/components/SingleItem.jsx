import { useState } from "react";

  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
const SingleItem = ({
  item,
  bookMarked,
  setBookMarked,
  readTimes,
  setReadTime,
}) => {
  const [isBookMark, setIsBookMark] = useState(false)
  const notify = () => toast("Already book mark is exist");
  const addNotify = () => toast("Book mark is added");
  const { author, authorImg, coverImg, title, createAt, readTime } = item;

  // -----Handle Book Functions-----
  const handleBookMark = (bookMark) => {
    const exist = bookMarked.find((mark)=>mark === bookMark)
    if(exist){
      notify()
    }else{
      const newBookMark = [...bookMarked, bookMark];
      setBookMarked(newBookMark);
      addNotify()
    }
    setIsBookMark(true)
  };

  const handleReadTime = (time)=>{
    const newReadTime = [...readTimes, time]
    setReadTime(newReadTime)
  }

  return (
    <div className=" border-2 shadow-md p-3 rounded-md my-3">
      <img className="w-full rounded-md" src={coverImg} alt="" />

      <div className="my-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={authorImg}
            alt=""
          />

          <div className="text-sm">
            <p className="text-lg font-semibold">{author}</p>
            <p className="text-sm">{createAt}</p>
          </div>
        </div>

        <div className="flex items-center">
          {readTime} min read{" "}
          <span
            className="cursor-pointer text-2xl"
            onClick={() => handleBookMark(item)}
          >
            {isBookMark ? (
              <i className="ri-bookmark-fill"></i>
            ) : (
              <i className="ri-bookmark-line"></i>
            )}
          </span>
        </div>
      </div>
      <h1 className="text-2xl font-semibold">{title}</h1>

      <a
        onClick={() => handleReadTime(readTime)}
        href="#"
        className="text-rose-600 underline"
      >
        Mark as read
      </a>

      {/* ===========Notify====== */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default SingleItem;
