import React from 'react';
import './style.css';

export default function App() {
  const swapFirstAndLast = (str) => {
    if (str.length < 2) {
      // If the string has less than 2 characters, no swapping is needed
      return str;
    }

    const firstChar = str[0];
    const lastChar = str[str.length - 1];
    const middleChars = str.slice(1, -1);

    return lastChar + middleChars + firstChar;
  };

  const originalString = 'Hello';
  const swappedString = swapFirstAndLast(originalString);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Original String: {originalString}</p>
      <p>Swapped String: {swappedString}</p>
    </div>
  );
}
