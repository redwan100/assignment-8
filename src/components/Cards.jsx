import React from 'react'
import fakeData from '../fakeData/fakeData'
import SingleItem from './SingleItem'
const Cards = ({ bookMarked, setBookMarked, readTimes, setReadTime }) => {
  return (
    <div>
      {fakeData.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          bookMarked={bookMarked}
          setBookMarked={setBookMarked}
          readTimes={readTimes}
          setReadTime={setReadTime}
        />
      ))}
    </div>
  );
};

export default Cards