import React, {useState} from "react";

const ChildBlank = (props) => {
    return (
        <div>
            <p>This is Child Counter: {props.counter}</p>
        </div>
    )
}


const ChildCom2 = (props) => {

    const handleButton = () => {
        props.setCounter(props.counter + 1)
    }

    return (
        <div>
            <button onClick={() => handleButton()}>Click to Change the Number from Child Comm</button>
        </div>

    )
}


const Blank = (props) => {

    const [counter, setCounter] = useState(0);

    const handleButtonClick = () => {
        setCounter(counter+1);
        console.log(counter);
    }

    return (
        <>
            <div>
                <button  onClick={() => handleButtonClick()}>Click to Increase the Count</button>
                <p>Number of times the button is clicked: {counter}</p>
                <ChildBlank counter={counter} />
                <ChildCom2 counter={counter} setCounter={setCounter} />


            </div>
        </>
    )
}

export default Blank;