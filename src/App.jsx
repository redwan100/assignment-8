import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

import CommonAskQues from "./components/CommonAskQues";


function App() {

  let [bookMarked, setBookMarked] = useState([]);

  const [readTimes, setReadTime] = useState([])



  let totalTime = 0;


  for(const time of readTimes){
    totalTime+= time
  }
  return (
    <>
      <Header />
      <div className="container mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-[3fr_2fr] justify-between gap-3">
        {/* left side  */}

        <Cards
          bookMarked={bookMarked}
          setBookMarked={setBookMarked}
          readTimes={readTimes}
          setReadTime={setReadTime}
        />

        {/* right side  */}
        <div>
          <div className="bg-green-100 text-emerald-600 py-2 px-3 rounded-md font-semibold">
            <h1>
              Spent time on read: <span>{totalTime}</span>min
            </h1>
          </div>

          <div className="bg-slate-200 my-3 p-2">
            <h1 className="font-semibold text-2xl">
              Bookmarked Blogs:{" "}
              <span className=" text-pink-600">{bookMarked.length}</span>
            </h1>
            <div className="bg-slate-200">
              {bookMarked.map((item) => (
                <div className="bg-slate-100 my-2">
                  <h1 className="p-1 font-semibold">{item.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CommonAskQues />
    </>
  );
}

export default App;
