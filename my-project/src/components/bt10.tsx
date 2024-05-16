import React, { useState } from 'react';

const Bt10: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const options = ['a', 'b', 'c', 'd'];

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelected(prevSelected => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter(item => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  return (
    <div>
      <div>Sở thích: {JSON.stringify(selected)}</div>
      {options.map(option => (
        <div key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selected.includes(option)}
            onChange={handleCheckboxChange}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Bt10;
