import { useState } from 'react';

function FuncComponent() {
    const [value, setValue] = useState(0)
    function add() {
        setValue(value + 1)
    }
    function substract() {
        setValue(value -1)
    }
    return  <div>
                <h2>Componente funcional</h2>
                <p>
                    <button onClick={substract}>-</button>
                    {value}
                    <button onClick={add}>+</button>
                </p>
            </div>
}

export default FuncComponent