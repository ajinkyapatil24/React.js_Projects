import React from "react";
import Profile from "./Components/Profile";

function App() {
  return (
    <div>
      <Profile name="Ajinkya" Address="Thane" Role="Frontend Developer">
        <p>Skills:javaScript,React js, Web tech</p>
        <button>contact</button>
      </Profile>
    </div>
  );
}

export default App;
