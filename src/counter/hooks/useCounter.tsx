import { useState } from 'react'
export const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const handleAdd = () => {
        setCounter(counter + 1)
    };
    const handleSubtract = () => {
        setCounter((prevState) => prevState -1)
    };
    const handleReset = () => {
        setCounter(0)
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
