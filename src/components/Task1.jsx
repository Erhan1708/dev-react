import React, {useState} from 'react';

/*1) Создать любой компонент.
    Создать для этого компонента новое состояние,
    и две кнопки, одна прибавляет значение на 1, а другая уменьшает на 1.*/

const Task1 = () => {

    const [number, setNumber] = useState(0)

    return (
        <div>
            <button onClick={() =>
                setNumber(number +1)}>+1
            </button>
            <button onClick={() =>
                setNumber(number -1)}>-1
            </button>
            <p>{number}</p>
        </div>
    );
};

export default Task1;