// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
//function App(){
    //1111111
    // let message = 'Bye there';
    // if(Math.random() > 0.5){
    //     message = 'Hello there';
    // }

    // return <h1>{message}</h1>

    //2222222
    // const date = new Date();
    // const time = date.toLocaleTimeString();

    // return <h1>{time}</h1>

    //3333333
    // return <h1>{new Date().toLocaleDateString()
    //     +'   '+new Date().toLocaleTimeString()}</h1>

    //4444444
    // const name = 'Damith';
    // const age = 30;

    // return <h1>
    //     Hi My name is {name} and I am {age} years old.
    // </h1>

    //55555555
    // const inputType = 'number';
    // const minValue = 5;

    // return <input type={inputType} min={minValue} />

    //666666666
    //return <input style={{border: '3px solid red'}} type="number" min={5} />

    //JSX rule 1
    //return <textarea autoFocus={true}/>

    //JSX rule 2
    //return <input maxLength={5}/>

    //JSX rule 3
    //return <input spellCheck/>
    //return <input spellCheck={false}/>

    //JSX rule 4
    //return <input style={{border: '5px solid red'}}/>



//}

// 5) Show the component on the screen
root.render(<App />);