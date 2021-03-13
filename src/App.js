import React from "react"
import './App.css';
import styled, {ThemeProvider, css} from "styled-components"

function App() {

  const theme = {
    primary:"brown",
    secondary:"black",
    bgColor:"yellow"
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <h1>Styled Components</h1>
      <form action="">
        <input type="text"/>
        <Button another="bgColor">Create</Button>   {/*primary is an argument that need to be passed for dynamic styled-components.*/}
      </form>
    </div>
    </ThemeProvider>
  );
}

export default App;


const Button = styled.button`
  margin-left:10px;
  padding:7px 10px;
  /* background:red; */
  /* background: ${(props) => props.primary? "red":"green"}; */
  background: ${(props) => props.theme.secondary};
  color:white;
  font-size:1.3rem;
  border:none;
  border-radius:4px;
  :hover{
    ${(props) => props.another && css`
    background: ${(props) => props.theme[props.another]};
    color:black;
    font-size:1.8rem;
  `}
  }
  /* box-shadow: 1px 2px 7px red; */
`