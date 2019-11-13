import React, { useState } from 'react';
import { MyContext }  from '../../App';

function Content() {
    const [count, setCount] = useState(0);
    return (
        <>
            Контекст по умолчанию, так как Content не
            обёрнут в MyContext.Provider==>
            <MyContext.Consumer>
                {val => <span> {val}</span>}
            </MyContext.Consumer>
            <p>Вы кликнули {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Кликни меня!
            </button>
        </>
    )
}

export default Content;