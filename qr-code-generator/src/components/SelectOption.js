import React from 'react';

const SelectOption = ({ options, selectedOption, setSelectedOption }) => (
  <div className="option-btn">
    {options.map((option) => (
      <button
        key={option.value}
        className={selectedOption === option.value ? 'selected' : ''}
        onClick={() => setSelectedOption(option.value)}
      >
        {option.name}
      </button>
    ))}
  </div>
);

export default SelectOption;
