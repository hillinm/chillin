import React from 'react';
import './index.css';
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div class="navigation-bar">
            <img src="./images/Chillin Logo.gif" alt="Logo" /> 
          <div class="navbar">
              <a href="index.html">Create User</a>
              <a href="index.html">Home</a>
          </div>
      </div>
      <Form />
    </div>

  );
}

export default App;
