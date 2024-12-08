import { useState } from 'react';

/* 
 How to access child state from parent
*/
const ClickCount = () => {
  const [count, setCount] = useState(0); //this should be in the child component only

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className='border rounded-md shadow-lg p-6 flex flex-col gap-4' >
      <h1>Count: {count}</h1>
      <p>
        <button 
          onClick={() => handleClick()}
          className='bg-blue-500 text-white py-2 px-4 rounded-md'
          >Child Button</button>
      </p>
    </div>
  );
};

export default function App() {

  const onParentClick = () => {
    console.log(' parent'); // increamnet child count
  };

  return (
    <div className='max-w-sm mx-auto my-20 border rounded-md shadow-lg p-6 flex flex-col gap-4'>
      <div className="">
        Hello 
      </div>
      <button
        onClick={onParentClick}
        className='bg-blue-500 text-white py-2 px-4 rounded-md'
      >Parent Button</button>

      <ClickCount />

    </div>
  );
}
