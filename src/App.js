import React from "react"
import './App.css';
import styled from "styled-components"

function App() {
  return (
    <div className="App">
      <h1>Styled Components</h1>
      <form action="">
        <input type="text"/>
        <Button primary>Create</Button>   {/*primary is an argument that need to be passed for dynamic styled-components.*/}
      </form>
    </div>
  );
}

export default App;


const Button = styled.button`
  margin-left:10px;
  padding:7px 10px;
  /* background:red; */
  background: ${(props) => props.primary? "red":"green"};
  color:white;
  font-size:1.3rem;
  border:none;
  border-radius:4px;
  :hover{
    background:blue;
  }
  /* box-shadow: 1px 2px 7px red; */
`