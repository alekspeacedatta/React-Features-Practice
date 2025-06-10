import { useState } from "react"
function toCelsius(fahrenheit) {
    return (fahrenheit - 32 ) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  
const TempCalculator = () => {
    const [temp, setTemp] = useState('');
    const [scale, setScale] = useState('c');

    const handleTempChange = (newTemp, newScale) => {
        setTemp(newTemp);
        setScale(newScale);
    }

    const celsius = scale === "f" ? tryConvert(temp, toCelsius) : temp;
    const farenheit = scale === "c" ? tryConvert(temp, toFahrenheit) : temp;


    return (
        <>
            <TempInput scale='c' temp={celsius} onTempChange={handleTempChange}/>
            <TempInput scale='f' temp={farenheit} onTempChange={handleTempChange}/>
        </>
    )
}
function TempInput ({scale, temp, onTempChange}){
    const handleChange = (e) => {
        onTempChange(e.target.value, scale);
    }
    return (
        <input value={temp} onChange={handleChange} />
    )
}
export default TempCalculator