import {MouseEventHandler} from 'react'
export default function App() {
    const onClick:MouseEventHandler<HTMLDivElement>=(e)=>{
        console.log(e.currentTarget) // current target refer to the element where the handler is added
        console.log(e.target) // target refers to the element where event actually triggers - source elemennt
    }
  return (
    <div onClick={onClick}>
        
        <button>Click</button>

    </div>
  )
}
