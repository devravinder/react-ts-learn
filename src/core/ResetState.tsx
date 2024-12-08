import { useState } from "react";


/* 
 Increment the counter (by 1 time)

 now check the reset button
 
 How to reset the counter back to '0'? 
   1. on Click of the reset button
   2. without creating a new component
   3. without changing the component position

*/

function Counter({ fancery }: { fancery?: boolean }) {
    const [count, setCount] = useState(0)
    return (
        <div className={`border ${fancery ? 'border-red-500' : ''} rounded-md p-4 flex flex-col justify-center gap-4`}>
            <div className="w-full text-center bg-green-500 text-white py-2 rounded-md">{count}</div>
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white py-2 px-4 rounded-md">add (+1)</button>
        </div>
    )
}

export default function ResetState() {
    const [reset, setReset] = useState(false)
    return (
        <div className="max-w-sm mx-auto my-16">
            <div className="flex flex-col gap-3">
                <Counter />

                <div className="w-full flex flex-row gap-4 px-4">
                    <input
                        checked={reset}
                        onChange={(e) => setReset(e.currentTarget.checked)}
                        type="checkbox"></input>
                    <label>Reset</label>
                </div>
            </div>
        </div>
    )
}
