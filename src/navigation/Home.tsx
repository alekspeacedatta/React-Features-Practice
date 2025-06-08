import React from 'react'
import { useState, useEffect } from 'react'

const home = () => {
  const [count, setCount] = useState(0);
  const [betweenes, setBetweenes] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Timer Tick");
      setBetweenes(prev => prev + 1);
    }, 1000);
    return () => { console.log("Cleaning Interval"); clearInterval(intervalId); }
  }, []);
  useEffect(() => {
    let previousTitle = document.title;
    document.title = `You Clicked ${count} Times`;

    return () => {
      document.title = previousTitle;
    }
  }, [count])
  return (
    <div>
      <p>Count {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <p>interval between mount and unmount was: {betweenes}</p>
    </div>
  )
}
export default home