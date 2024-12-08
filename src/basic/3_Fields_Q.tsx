import { ChangeEventHandler, useState } from 'react';


/* 
 How to stop re-rendering every filed? 
 Why the other fields are re-rendering? if name is changing...email also re-rendering

*/

const Input = ({
  value,
  onChange,
  name,
}: {
  value: string;
  name: string;
  onChange:ChangeEventHandler<HTMLInputElement>;
}) => {
  console.log('in input ', { name, value });
  return <input name={name} value={value} onChange={onChange}></input>;
};

export default function App() {
  const [obj, setObj] = useState({ name: '', email: '' });

  const handleChange = (field: string, inputValue: string) => {
    setObj({ ...obj, [field]: inputValue }); //
  };

  return (
    <div>
      Name:{' '}
      <Input
        value={obj.name}
        name={'name'}
        onChange={(e) => handleChange('name', e.currentTarget.value)}
      />
      <br />
      <br />
      Email:
      <Input
        value={obj.email}
        name={'email'}
        onChange={(e) => handleChange('email', e.currentTarget.value)}
      />
    </div>
  );
}
