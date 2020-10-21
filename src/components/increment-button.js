import React from 'react';

export default function IncrementButton(props) {
    console.log(props)
    console.log('this is this', this)
    return <button onClick={props.incrementOnClick}>Increment</button>;
}

// Update the code so clicking "increment" in IncrementButton, increments this.state.count in App
