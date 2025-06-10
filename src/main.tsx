import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client"
import TemperatureCalculator from "./TemperatureCalculator.tsx"
import { BrowserRouter } from 'react-router-dom'
import TempCalculator from './TempCalculator.tsx'
import './index.css'
import App from './App.tsx'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StrictMode>
      {/* <App /> */}
      {/* <TemperatureCalculator/> */}
      <TempCalculator/>
    </StrictMode>,
  </BrowserRouter>
);