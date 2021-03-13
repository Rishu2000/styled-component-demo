import React from "react"
import './App.css';
import styled from "styled-components"

function App() {
  return (
    <div className="App">
      <h1>Styled Components</h1>
      <form action="">
        <input type="text"/>
        <Button>Create</Button>
      </form>
    </div>
  );
}

export default App;


const Button = styled.button``