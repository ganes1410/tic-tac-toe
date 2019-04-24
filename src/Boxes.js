import React from 'react';
import Box from './Box';
import calculateWinner from './calculateWinner';

const borderStyle = '1px solid red';

const Boxes = () => {
  const initialBoxState = Array(9).fill(null);
  const [boxes, setBoxes] = React.useState(initialBoxState);
  const [currentMove, setCurrentMove] = React.useState('X');
  const [winner, setWinner] = React.useState(null);

  function handleClear() {
    setBoxes(initialBoxState);
    setCurrentMove('X');
    setWinner(null);
  }

  function handleBoxClick(i) {
    // Only execute this when th
    if (boxes[i] === null && !winner) {
      const newBoxes = boxes.slice();
      newBoxes[i] = currentMove;
      const winner = calculateWinner(newBoxes);
      if (winner) {
        setWinner(winner);
      }
      console.log();

      if (currentMove === 'X') {
        setCurrentMove('O');
      } else {
        setCurrentMove('X');
      }
      setBoxes(newBoxes);
    }
  }

  return (
    <>
      Next Move : {currentMove}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '304px',
          marginTop: '12px',
          marginLeft: '12px',
          borderTop: borderStyle,
          borderRight: borderStyle
        }}
      >
        {boxes.map((box, index) => (
          <Box
            key={index}
            onClick={() => handleBoxClick(index)}
            boxValue={box}
          />
        ))}
      </div>
      <button onClick={handleClear}>Clear</button>
      {winner && <div>Winner is {winner}</div>}
    </>
  );
};

export default Boxes;
