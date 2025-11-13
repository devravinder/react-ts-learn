
// show first n users in sorted order

import { ChangeEventHandler, useMemo, useState } from "react"

const users = [
    {name:'user1', score:90},
    {name:'user2', score:99},
    {name:'user3', score:97},
    {name:'user4', score:40},
]

export default function Q2() {

  const [data] = useState(()=>users.sort((f,s)=>s.score-f.score))  
  const [val, setVal] = useState<undefined | number>()


 const showData =  useMemo(() => {
    if(!val)
        return data;
    return data.slice(0, val);
  }, [val, data])


  const onInput:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setVal(e.currentTarget.valueAsNumber)
  }


  return (
    <div>
        <div className="">
            <input type="number" value={val} onChange={onInput}></input>
        </div>
        <div className="">
            {showData.map(e=><div key={e.score}>{e.name}| {e.score}</div>)}
        </div>
    </div>
  )
}
