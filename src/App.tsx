import React from 'react'
import styles from "styled-components"
import styled from "./myComponent.module.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from "./navigation/Home";
import About from "./navigation/About";
import Services from "./navigation/Services";
import NotFound from "./navigation/NotFound";
import MyFunctionalLifecycleComponent from './navigation/MyFunctionalLifecycleComponent';
import './App.css'

function App() {
  const [name, setName] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [flavor, setFlavor] = React.useState('coconut');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("an name was submited: " + inputValue);
    setName(inputValue);
  }
  const Button = styles.button`
    padding: 20px;
    background-color: black;
    color: white;
    padding: 30px;
    margin-top: 20px;
  `; 
  const TomatoButton = styles(Button)`
    cursor: pointer;
    background-color: red;
  `;
  const rootStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "70px"
  }
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  }
  const rootDivStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px", 
  }
  return (
    <>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services/gela lelashvili">Services</Link></li>
          <li><Link to="/notfound">404 Not Found</Link></li>
          <li><Link to="/myComp">My special Component </Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services/:userId' element={<Services/>}/>
        <Route path='/notfound' element={<NotFound/>}/>
        <Route path='/myComp' element={<MyFunctionalLifecycleComponent greeting="hello bob"/>}/>
      </Routes>
    </div>
      <h2 className={styled.title}>{name}</h2>
        <div style={rootStyle}>
          <form onSubmit={handleSubmit} style={formStyle}>
            <label htmlFor="">Change Name After Submit</label>
            <input type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
            <input type="submit" value="submit" />
          </form>
          <div style={rootDivStyle}>
            <label htmlFor="">Change Name In Real Time</label>
            <input type="text" onChange={(e) => {setName(e.target.value)} } />
          </div>
        </div>
        <form style={formStyle} onSubmit={(e) => {alert("your Fav Flv is: " + flavor); e.preventDefault();}}>
          <label htmlFor="">select your fav flavor</label>
            <select value={flavor} id="" onChange={(e) => {setFlavor(e.target.value)}}>
              <option value="milk">milk</option>
              <option value="choclate">choclate</option>
              <option value="mango">mango</option>
              <option value="lime">lime</option>
            </select>
            <input className={styled.button} type="submit" />
        </form>
        <Button>Basic Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>

        <TomatoButton onClick={() => {navigate("/about")}}>navgate to about me page</TomatoButton>
    </>
  )
}

export default App
