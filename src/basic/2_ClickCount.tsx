import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  let clicks = 0;

  const handleClick = () => {
    setCount(count + 1); 
    clicks = clicks + 1;
    console.log({ clicks, count }); // should print no of clicks

    /* 
     why 'clicks' is not getting increamnet?
     How to fix it?
    */
  };

  return (
    <div>
      <h1>{count}</h1>
      <p>
        <button onClick={() => handleClick()}>Click</button>
      </p>
    </div>
  );
}
