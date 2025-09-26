import { useState } from 'react'
export const useCounter = (initialValue: number = 0) => {
    const [counter, setCounter] = useState(initialValue);

    // const handleAdd = () => {
    //     setCounter(counter + 1)
    // };
    const handleAdd = () => {
        setCounter((prevState) => prevState + 1)
    };
    const handleSubtract = () => {
        setCounter((prevState) => prevState -1)
    };
    const handleReset = () => {
        setCounter(initialValue)
    };

    return {
        // values
        counter,

        // methods / actions
        handleAdd,
        handleSubtract,
        handleReset,
    }
}
