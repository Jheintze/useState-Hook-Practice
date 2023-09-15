import React, { useState } from "react";

function App() {
  let time = new Date()
    .toLocaleTimeString()
    .replace("AM", "")
    .replace("PM", "");

  const [count, setTime] = useState(time);

  function updateTime() {
    setTime(count + time);
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
