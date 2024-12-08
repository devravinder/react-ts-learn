import { useState } from "react"


/* 
What is the number value in UI & in alert?
*/
export default function State() {

    const [number, setNumber] = useState(0)

    const onClick1 = () => {
        setNumber(number + 1)
        setNumber(number + 1)
        setNumber(number + 1)
    }

    const onClick2 = () => {
        setNumber(number + 5);
        alert(number);
    }

    const onClick3 = () => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
    }


    return (
        <div className="max-w-sm mx-auto my-16">
            <div className="flex flex-col gap-4">
                <div className="w-full text-center bg-green-500 text-white py-2">{number}</div>
                <button
                    onClick={onClick1}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                > Button (+1)*3</button>

                <button
                    onClick={onClick2}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                > Alert-Button (+5)</button>
                <button
                    onClick={onClick3}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                > Timeout-Alert-Button (+5)</button>
            </div>
        </div>
    )
}
