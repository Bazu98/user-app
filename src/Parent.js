import React from 'react';
import Child from './Child';

const users = ['vaso','rati','manana'];

const Parent = () => {
  return (
    <div>
        <Child users={users} isUserLoggedIn={false} />
    </div>
  )
}

export default Parent;

