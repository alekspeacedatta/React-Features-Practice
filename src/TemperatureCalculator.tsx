import React, { useState } from 'react';

// ფუნქციები ტემპერატურის კონვერტაციისთვის
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



// შვილობილი კომპონენტი, რომელიც აჩვენებს, თუ წყალი ადუღდება
function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

// მშობელი კომპონენტი (Calculator), რომელიც ფლობს state-ს
function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c'); // 'c' ან 'f'

  const handleTemperatureChange = (newTemperature, newScale) => {
    setTemperature(newTemperature);
    setScale(newScale);
  };

  // მიმდინარე ტემპერატურის მნიშვნელობები ორივე სკალისთვის
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleTemperatureChange} />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleTemperatureChange} />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}
// შვილობილი კომპონენტი ტემპერატურის input-ისთვის
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  const handleChange = (e) => {
    onTemperatureChange(e.target.value, scale); // იძახებს მშობლის ფუნქციას
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
}
export default Calculator;