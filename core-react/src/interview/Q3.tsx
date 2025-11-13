import { useState } from "react"

export default function Q3() {
    const [count, setCount] = useState(0)

    const onClick=()=>{

        setInterval(()=>{
            setCount(count+1)
        })

    }

    /* 
     - issue
        - why? if we click only once, why it not keep increasing
           -  at that moment count = 0.
           - React creates the setInterval function closure with count = 0.
           - So inside the interval callback, count + 1 is always 1.
           - for every interval, the state to 1 again and again 
                - so React doesn’t re-render after the first update.
                - only for the first time the closure takes the old(initial) value and adds 1 => so result is 1 

         - Why? if we click twice, why it is flickering betwen 1 and 2
           - when we click 1st time
              - one interval closure is created with initial value 0
                  - [a*] so the closure is sending a setUpdate request by passing always '1' i.e setUpdate(1)
                      - react's updates only...if the value in UI is not '1'
                           


            - when we clisk 2nd time
              - one more setInterval closure is added with intial value is '1'
                 - [b*] this closure sends a setUpdate request by passing always 2 (1+1) i.e setUpdate(2)
                    - react's updates only...if the value in UI is not '2'


            So, finally
               - for the very first time...due to closure 1 [a*]...the value gets updates to 1
               - one 2nd click
                   - the both interval's [a*] & [b*], try to update to 1 & 2
                      - this will keeps happening all the time....so flickering


            so, if we click more times....more flickering
               - if click 3 time...it flickers between 1,2,3
    */

  return (
    <div>
        <div className="">{count}</div>
        <button onClick={onClick}>Click</button>
    </div>
  )
}
