import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [parentValue, setParentValue] = useState<string>("none")
    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {setParentValue(e.currentTarget.value)}
  return (
    <div>
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Moscow</option>
            <option value={"3"}>Kiev</option>
        </select>
    </div>
  );
}

export default App;
