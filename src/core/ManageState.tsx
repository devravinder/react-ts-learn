import { useState } from "react";


/* 
 Increment the 3 counters

 now check the fancy
 What will be the count value on the Buttons? and Why like that?

*/

function Counter({fancery}:{fancery:boolean}) {
    const [count, setCount] = useState(0)
  return (
    <div className={`border ${fancery ? 'border-red-500' : ''} rounded-md p-4 flex flex-col justify-center gap-4`}>
        <div className="w-full text-center bg-green-500 text-white py-2 rounded-md">{count}</div>
        <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white py-2 px-4 rounded-md">add (+1)</button>
    </div>
  )
}

export default function ManageState() {
    const [fancy, setFance] = useState(false)
    return (
        <div className="max-w-sm mx-auto my-16">
            <div className="flex flex-col gap-3">

                {/* Same compoenet at the same place, preserves the state */}
                {/*  this is one statement */}
                {fancy ? <Counter fancery={true} /> : <Counter fancery={false} />}



        
                {/* different component at the same position resets the state */}
                {/* these are two different statements */}
                {fancy && <Counter fancery={true} /> }{!fancy && <Counter fancery={false} />}

                {/* different component at the same position resets the state ( wrapped with div ) */}
                {fancy ? <Counter fancery={true} /> : <div><Counter fancery={false} /></div> }

                <div className="w-full flex flex-row gap-4 px-4">
                    <input
                        checked={fancy}
                        onChange={(e) => setFance(e.currentTarget.checked)}
                        type="checkbox"></input>
                    <label>Fancy</label>
                </div>
            </div>
        </div>
    )
}
