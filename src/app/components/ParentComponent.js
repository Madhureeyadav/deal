import React, { useState } from 'react';
import Counter from './Counter';

const ParentComponent = () => {
  const [incrementCounter, setIncrementCounter] = useState(true);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={incrementCounter}
          onChange={() => setIncrementCounter(!incrementCounter)}
        />
        Increment Counter
      </label>
      <Counter shouldIncrement={incrementCounter} />
    </div>
  );
};

export default ParentComponent;
