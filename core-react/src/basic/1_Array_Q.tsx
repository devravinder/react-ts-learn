import { useState } from 'react';


/* 
 Why the elements are not updating in the UI?

*/

export default function App() {
  const [elements, setElements] = useState(['A', 'B', 'C', 'D']);

  const handleClick = (index: number) => {
    console.log('before', elements);
    elements[index] = elements[index].toLocaleLowerCase(); // to small case
    console.log(elements, 'after ');
    setElements(elements);
  };

  return (
    <div>
      {elements.map((element, index) => (
        <button key={index} onClick={() => handleClick(index)} style={{ margin: '5px' }}>
          {element}
        </button>
      ))}
    </div>
  );
}
