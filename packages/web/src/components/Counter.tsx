import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@frontend/shared/redux/demoSlice';

const Counter = () => {
  const value = useSelector((state: any) => state?.counter?.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <p>{value}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
