import { useReducer } from "react";
import { useContext } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function Hooks() {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>Minus</button>
            <button onClick={() => dispatch({type: 'increment'})}>Plus</button>
        </>
    );
}

export default Hooks;