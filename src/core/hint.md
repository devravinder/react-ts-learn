1. same component at the same position preserves the state
2. different component at the same position resets the state

---
by changing the key of a component...the component will get reset the state

 <Counter key={reset?'1':'3'} />
