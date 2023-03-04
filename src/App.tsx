import React from 'react';
import './App.css';
import {Person} from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
      name="Major"
      email="majordav@msn.com"
      age={23}
      isMarried={true}
      friends={["Vergil", "Mary", "James"]}
      />
    </div>
  );
}

export default App;
