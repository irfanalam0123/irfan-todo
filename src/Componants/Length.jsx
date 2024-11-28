
import React from 'react';

const Length = ({todoitems}) => {
  return (
    <>{todoitems.length === 0 ? <h1>empty in todo list</h1> : null}</>
  );
}

export default Length;
