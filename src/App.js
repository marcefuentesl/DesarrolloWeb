//librerias ó components
import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";

function App() {
  
  const [users, setUsers] = useState([{ id: 0, name: "Ruben" }]);

  const onClick = () => {
    setUsers([...users, {id: users.length, name: "Marce"}])
  };  

  var dataComponent = {
    type: "button",
    value: "Update",
    hidden: false
  }

  //const[date, setDate] = useState(new Date());
  const[seconds, setSeconds] = useState(0);
  const[minutes, setMinutes] = useState(0);
  const[hours, setHours] = useState(0);

  useEffect (() => {
    let interval = null;
    interval = setInterval(() => {
      while(seconds<60) {
        setSeconds(seconds => seconds + 1);
        if(seconds == 60) {
          setSeconds(0);
        }
      }

      while(minutes<60) {
        setMinutes(minutes => minutes + 1);
        if(minutes == 60) {
          setMinutes(0);
        }
      }  

      while(hours<24) {
        setHours(hours => hours + 1);
        if(hours == 24) {
          setHours(0);
        }
      }
    }, 1000);

    return() => clearInterval(interval);
    //var timerID = setInterval(() => tick(), 1000)
    //return function cleanUp(params) {
    //  clearInterval(timerID)
    //}
  });

  //function tick() {
  //  setDate(new Date())
  //}

  return (
    <div>
      <h1>{hours}:{minutes}:{seconds}</h1>
      <input onClick={onClick} {...dataComponent} />
      <div>
        {users.map((e) => (
          <div>
            {e.id} - {e.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
