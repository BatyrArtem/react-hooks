import React, {useState} from 'react';
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import List from "./components/List";

const App = () => {

    const username = useInput('');
    const password = useInput('');

    return (
        <div>
            <Hover/>
            <input {...username} type="text" placeholder={username}/>
            <input {...password} type="text" placeholder={password}/>
            <button onClick={() => console.log(username.value, password.value)}>Click</button>
            <List/>
        </div>
    );
}

export default App;
