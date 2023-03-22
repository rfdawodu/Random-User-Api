import React, { useState, useEffect } from "react";
import "./App.css";
// import { useState } from "react";
export default function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Random user</h1>
      {Object.keys(user).length > 0 ? (
        <div style={{ padding: "40px" }}>
          <h1>customer data</h1>
          <h2>
            Name: {user.results[0].name.title},{user.results[0].name.first}
            <pan> {user.results[0].name.last}</pan>
          </h2>

          <img src={user.results[0].picture.large} alt="" />
          <p>location:{user.results[0].location.city}</p>
          <p>location:{user.results[0].location.state}</p>
          <p>location:{user.results[0].location.country}</p>
          <button onClick={() => fetchData()}>Get Randon User</button>
        </div>
      ) : (
        <p>looding...</p>
      )}
    </div>
  );
}
