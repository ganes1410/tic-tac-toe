import React from 'react';

const borderStyle = '1px solid red';

const Box = ({ boxValue, onClick }) => {
  return (
    <div
      style={{
        borderLeft: borderStyle,
        borderBottom: borderStyle,
        borderTop: 'none',
        height: '60px',
        width: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      {boxValue}
    </div>
  );
};

export default Box;
