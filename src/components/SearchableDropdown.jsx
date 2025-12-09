import React, { useState, useEffect } from 'react';

const SearchableDropdown = ({ id, name, value, onChange, options, placeholder, required, label }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setFilteredOptions(
      options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, options]);

  const handleSelect = (option) => {
    onChange({ target: { name, value: option } });
    setSearchTerm(option);
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 100); // Delay to allow click on option
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative">
      {label && <label htmlFor={id} className="block text-sm font-medium text-white mb-2">{label}{required && <span className="text-red-500">*</span>}</label>}
      <input
        type="text"
        id={id}
        name={name}
        value={searchTerm || value}
        onChange={handleSearchChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full p-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder={placeholder}
        required={required}
        autoComplete="off"
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
          {filteredOptions.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="p-3 cursor-pointer hover:bg-blue-100 text-black"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
