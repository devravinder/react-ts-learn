import { useState } from 'react';
import { Fragment } from 'react';


/* 
    How to stop CardTitle re-rendering, when I click on Parent clicks?

    bcz... Parent clicks is not changing any props of CardTitle...so it shouldn't re-render

*/

type CardTitleProps =  { title: string, onTitleClick:(count: number)=>void }

const CardTitle = ({ title, onTitleClick }:CardTitleProps ) => {
    console.log('in Card Title');
    const [childCount, setChildCount] = useState(0)

    const onClick = () => {
        setChildCount(childCount + 1)
        onTitleClick(childCount + 1)
    }
    return (
        <Fragment>
            <button
                    onClick={onClick}
                    className='bg-green-500 text-white rounded-md py-1 px-2'
                > Clicks: {title}</button>

        </Fragment>
    );
};


const Card = () => {
    const [clicks, setClicks] = useState(0);
    const [title, setTitle] = useState('Title 0')

    const onClick = () => {
        setClicks(clicks + 1);
    };

    const onTitleClick = (count: number) => {
        setTitle(`Title ${count}`)
    }
    



    return (
        <Fragment>
            <div className="max-w-sm border rounded-md shadow-lg my-12 mx-auto p-6 flex flex-col gap-2">

                <CardTitle onTitleClick={onTitleClick} title={title} />
                <button
                    onClick={onClick}
                    className='bg-green-500 text-white rounded-md py-1 px-2'
                > Parent Clicks: {clicks}</button>
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


/* 
 1. wrap child component in memo 
    even if the props are not changing...
    if the parent component re-renders, it'll trigger child component re-render
    to stop use memo

 2. useCallback for props functions
    otherwise functions will get created everytime

*/
