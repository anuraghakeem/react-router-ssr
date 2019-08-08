import React, {useState} from 'react'

const Counter = ()=>{
    const [count, changeCount] = useState (0);

    return (
      <div>
          <div data-test="CounterCheck">
            {count}
            <button data-test="buttonComponent" onClick = {()=> changeCount(2)}>Change</button>

          </div>
      </div>  
    );
}

export default Counter;
