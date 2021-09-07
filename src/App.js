//librerias ó components
import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const routes = [
  {path: "/home", component: Home},
  {path: "/hooks", component: Hooks, routes: [{path: "/hooks/estado", component: HookState}, {path: "/hooks/efecto", component: HookEffect}]},
  {path: "/timer", component: Timer}, 
  {path: "/params/:data", component: HookParams}
];

export default function RouteConfigExample() {
  return (
    <Router>
      <ul>
        <li> <Link to = "/home"> Home </Link> </li>
        <li> <Link to = "/hooks"> Hooks </Link> </li>
        <li> <Link to = "/timer"> Timer </Link> </li>
        <li> <Link to= "/params/:data">Show data (Hook useParams) </Link> </li>
      </ul>

      <div>
        <Switch>
          {routes.map((route, i) => (
            <RouteSub key={i} {...route} />
          ))}
        </Switch>
      </div>

      <HistoryBtn></HistoryBtn>
      
    </Router>
  );
}

function RouteSub(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function Home() {
  return (
    <div>
      <h1> Entregable 2 </h1>
      <br></br>
      <h3> Marcela Fuentes, A01748161 </h3>
    </div>
  );
}

function Hooks({routes}) {
  return (
    <div>
      <h2>Hooks</h2>
      <ul>
          <li> <Link to="/hooks/estado"> useState </Link> </li>
          <li> <Link to="/hooks/efecto"> useEffect </Link> </li>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteSub key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

function HookState() {
  var dataComponent = {
    type:"button",
    value:"Update",
    hidden: false
  }

  const onClick = () => {
    setUsers([...users, {id: users.length, name: "Marce", lastName: "Fuentes"}])
  };  

  const [users, setUsers] = useState([
    {id: 0,
      firstName : "Marce", 
      lastName : "Fuentes"
    }, 
    {
      id: 1, 
      firstName: "Milton", 
      lastName: "Alarcon"
    }
  ]);

  return (
    <div>
    <input onClick={onClick} {...dataComponent} />
    <div>
      {users.map((e) => (
        <div>
          {e.id}: {e.firstName} - {e.lastName}
        </div>
      ))}
    </div>
    </div>
  );

}

function HookEffect() {
  function tick() {
    setDate(new Date());
  }

  useEffect (() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup(params) {
      clearInterval(timerID);
    }
  }); 

  const [date, setDate] = useState(new Date());

  return ( 
    <h1> {date.toLocaleTimeString()} </h1>
  );

}

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect (() => {
      let interval = null;
      interval = setInterval(() => {
        if (seconds >= 59){
          setMinutes(minutes => minutes + 1);  
          setSeconds(0);
        } else if (minutes >= 59){
          setHours(hours => hours + 1);  
          setMinutes(0);  
          setSeconds(0);

        } else {
        setSeconds(seconds => seconds + 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }); 

    return (
      <div>
        <h1> {hours}:{minutes}:{seconds} </h1>
      </div>
    );
}

function HookParams() {
  let {data}  = useParams();
  return (
    <div>
        Borra ":data" y escribe lo que quieras
        <div>Escribiste: {data}</div>
    </div>
  )
}

 function HistoryBtn() {
   let history = useHistory();
   function ClickHistory() {
     history.push("/home");
   }
 
   return (
     <div>
         <button onClick={ClickHistory}>Go Home</button>
     </div>
   );
 }