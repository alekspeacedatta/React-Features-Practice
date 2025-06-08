import React, { useState, useEffect } from 'react';

function MyFunctionalLifecycleComponent({ greeting}:any) {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Initial message  component');

  // componentDidMount (და componentDidUpdate message-სთვის)
  useEffect(() => {
    console.log('Functional: Component Did Mount or message/greeting updated');
    // აქ შეიძლება იყოს API call, რომელიც დამოკიდებულია message-ზე ან greeting-ზე
    document.title = `Functional Count: ${count}`;

    // ეს ნაწილი არის cleanup, componentWillUnmount-ის ანალოგი ამ კონკრეტული ეფექტისთვის
    // თუ ეფექტი ხელახლა გაეშვება (message ან greeting შეიცვლება), cleanup ჯერ გაეშვება
    return () => {
      console.log('Functional: Cleanup for message/greeting effect');
    };
  }, [message, greeting]); // გაეშვება mount-ზე და როდესაც message ან greeting შეიცვლება

  // componentDidUpdate count-ისთვის
  useEffect(() => {
    console.log('Functional: Count updated (componentDidUpdate equivalent for count)');
    if (count > 0) {
        console.log('Functional: Count is greater than 0');
    }
    // თუ დამოკიდებულების მასივი ცარიელია, ეს ეფექტი მხოლოდ mount-ზე გაეშვება
    // თუ დამოკიდებულების მასივი საერთოდ არ არის, ყოველ რენდერზე გაეშვება
  }, [count]); // გაეშვება mount-ზე და როდესაც count შეიცვლება

  // componentDidMount და componentWillUnmount (ზოგადი)
  useEffect(() => {
    console.log('Functional: Simulating componentDidMount (runs once)');
    const timerId = setInterval(() => console.log('Timer tick from functional'), 2000);

    // Cleanup ფუნქცია (componentWillUnmount-ის ანალოგი)
    return () => {
      console.log('Functional: Simulating componentWillUnmount (clearing timer)');
      clearInterval(timerId);
    };
  }, []); // ცარიელი დამოკიდებულების მასივი ნიშნავს, რომ ეს ეფექტი ერთხელ გაეშვება mount-ზე, და cleanup unmount-ზე

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  console.log('Functional: Render');
  return (
    <div>
      <h1>Functional Component Lifecycle with Hooks</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
      <p>Message: {message}</p>
      <button onClick={() => setMessage('Updated message at ' + new Date().toLocaleTimeString())}>
        Update Message
      </button>
      <p>{greeting}</p>
    </div>
  );
}

export default MyFunctionalLifecycleComponent;