import { useRef, useState } from "react"
// Stop watch
export default function Q1() {
  const [count, setCount] = useState<number>(0)
  
    const counterRef = useRef<number | undefined>();
  
    const start=()=>{
  
      counterRef.current = setInterval(()=>{
        setCount(count=> count+1)
      }, 1000)
  
    }
  
    const reverse=()=>{
  
      if(counterRef.current)
        clearInterval(counterRef.current)
  
      counterRef.current = setInterval(()=>{
        setCount(count=> {
           count = count-1;
           if(count==0){
            clearInterval(counterRef.current)
          }
          return count;
        })
      }, 1000)
       
    }
  
    const pause=()=>{
      if(counterRef.current)
        clearInterval(counterRef.current)
    }
  
  
  
    return (
      <div>
        <div className="">{count}</div>
        <button onClick={start} >Start</button> <br/>
        <button onClick={reverse}>Reverse</button><br/>
        <button onClick={pause} >Pause</button><br/>
      </div>
    )
}
