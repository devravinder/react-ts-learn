import { ChangeEvent, useReducer } from 'react';


type FormState = { name?: string,  age: number}

type Action={type: string,nextName?: string }

function reducer(state: FormState, action: Action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'Taylor', age: 42 };

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    }); 
  }

  return (
    <>
      <input
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Increment age
      </button>
      <p>Hello, {state.name}. You are {state.age}.</p>
    </>
  );
}
