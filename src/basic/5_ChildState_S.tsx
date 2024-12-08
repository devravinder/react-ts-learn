import { useState, useRef, forwardRef, useImperativeHandle, ForwardRefRenderFunction, PropsWithoutRef } from 'react';

type ClickCountElement = {
  onClick: VoidFunction;
  count: number;
};

type ClickCountProps = Record<string,string>;

const ClickElement:ForwardRefRenderFunction<ClickCountElement, PropsWithoutRef<ClickCountProps>> = (props, ref)=>{
  const [count, setCount] = useState(0); //this should be in the child component only

  const handleClick = () => {
    setCount(count + 1);
  };

  useImperativeHandle(ref, () => ({
    onClick: handleClick,
    count,
  }));

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
}

const ClickCount = forwardRef(ClickElement);

export default function App() {
  const clickCountRef = useRef<ClickCountElement>(null);

  const onParentClick = () => {
    console.log(' parent', clickCountRef.current?.count);
    clickCountRef.current?.onClick();
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

      <ClickCount ref={clickCountRef} />
    </div>
  );
}
