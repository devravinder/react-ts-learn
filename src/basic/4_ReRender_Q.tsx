import { useState } from 'react';
import { Fragment } from 'react';


/* 
  How to stop CardTitle re-rendering?
*/
const CardTitle = ({ title }: { title: string }) => {
  console.log('in Card Title');
  return (
    <Fragment>
      <h3>{title}</h3>
    </Fragment>
  );
};

const Card = () => {
  const [clicks, setClicks] = useState(0);

  const onClick = () => {
    setClicks(clicks + 1);
    console.log('clicks', clicks);
  };
  return (
    <Fragment>
      <div onClick={onClick} className="max-w-sm border rounded-md shadow-lg my-12 mx-auto p-6 cursor-pointer">
        Clicks: {clicks}
        <CardTitle title={'Title'} />
      </div>
    </Fragment>
  );
};

export default function App() {
  return (
    <Fragment>
      <Card></Card>
    </Fragment>
  );
}
