Basic:-
What is hoisting
let vs var

Medium:-
How virtual dom improves perfomance?
Hooks, What are the hooks you have used so far?
   useState
   useEffect
   useRef
   useCallback
   useMemo
   useLayoutEffect
   useReducer 
   useFormStatus & useActionState
   useContext
   useImperativeHandle
   useSyncExternalStore
   useTransition & startTransition
   useDeferredValue


   useEffect vs useLayoutEffect
   | Aspect                  | `useEffect`                                     | `useLayoutEffect`                                              |
   |-------------------------|-------------------------------------------------|----------------------------------------------------------------|
   | When it runs            | After render **and after browser paint**        | After DOM mutations **but before browser paint**               |
   | Does it block painting? | No (non-blocking, asynchronous)                 | Yes (synchronous, blocks painting)                             |
   | Use case                | Data fetching, subscriptions, logging, timers   | DOM measurements, layout calculations, immediate visual updates|
   | Impact on performance   | Better for most side effects                    | Can degrade performance if overused                            |
   | Example                 | Fetching API data, setting timers               | Positioning tooltips based on element size                     |


Special functions
   use
      - used to read the value of a Promise or context.
      - we can use anywhere ..inside loops or conditional blocks

   startTransition
   memo
   lazy
   createContext
   
e.currentTarget vs e.target ?

Advantage of functional component? over class based components ?

What HOC ( Higher Order Component )?

why we have to use useState / state instead of normal variables?

useMemo, useCallback, useReducer, useRef

customHooks? wht we need? example any?

What are actions ?  How they are dufferent from normal functions?
    -Functions called in startTransition are called “Actions”. 


How do you handle click event outside one component?

How to optimze react app?

lazy vs suspense?

How are you handling errors in the react app?

why do we need key while rendering list/array?
    - to identify which elements have changed, been added, or removed
       enabling efficient updates and avoiding unnecessary re-renders

why we need to use redux/any...instead of context

    - Context API is best for simple or static data sharing or state that doesn't change frequently
    - Context causes too many renders when top level element state is changed frequently 
            - even if it is not rendering, it'll do compare check

      - but redux uses subscribers
          - so it'll rednder only subscribed component when top level element state is changed 
          - it won't do any unnecessary checks

what us CORS issue? where it occurs?

How to pass props from child to parent? / how to access child's state/functions from parent?
                    - calls back functions
                    - central storage
                    - useImperativeHandle & forwardRef

Whar are portals? What are use cases?  (createPortal)
            - to use modals & popups
            - to add react-functionality in existing non-react applications

Expirence Test:-
How are handling authentication  & authorization?
            - how are hanlding tokens
                   - store in memory or session store
                   - in coockie
            - CSRF & XSS  what are they & how to seure
                                  CSRF 
                                     - http only header
                                        - inaccessible to JavaScript

                                     - SameSite=Lax or Strict 
                                          - SameSite cookie attribute, restricting cookie sending on cross-site requests.
                                          - works well if both front end & back end are on same domain


                                     - CORS
                                        - Validate Origin and Referer headers.

                                     - Use anti-CSRF tokens ( sessionIds, JSESSION )
                                         - unique tokens tied to user sessions, verified on each state-changing request

                                     - Double Submit Cookie pattern ***
                                        - send token both as cookie and request header, server checks both


                                  XSS 
                                    - CSP header & sanitize text before setting dangerouslySetInnerHTML
  
have you worked with TS?
have you ever tried ...to create dynamic forms? What are the challenges you may/have faced?
                    - formIO library
have you used any form libraries? Formik, react-hook-form **?
how do you handling the re-render issue...if many fields exists in one objcet?
what are some challenging tasks you accomplished?
Micro frontends?
Nginx config?
Why we have to clear Timers while component unmounting?
              - to avoid memory leak


What will look for...while doing code review?






Logical:-

1. flat an array 
   i=> [1,2,3,[4,5,[6,7]]]   o=> [1,2,3,4,5,6,7]

2. find the indext at which the left sum & right sum has max diff
    ( conside index one in left side sum)

   i=> [4,5,1,2,3]    o=> 3
      

3. Pair Sum
   find the elements whose sum is equal to the given number
    i=> 8, [1,2,3,5,4]      o=> 3,5
    ii=> 9, [1,2,3,4]       o=> false

4. Middile element is linked list

6. Proper closing brackets
   i=> {[] []}   o=> true
   ii=> 
