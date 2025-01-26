
import * as fonts from '@/utils/fonts'
import React, { useState } from 'react';
import styles from './ShellNav.module.css'

interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const ShellNav: React.FC<Props> = ({ label, placeholder, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="relative">
      {label && <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>}
      <div className="flex">
        <span className="inline-block px-3 py-2 text-sm font-medium text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-l-md">
          $
        </span>
        <input
          id='cliPrompt'
          type="text"
          className={`!${fonts.sourceCodePro.className} w-full px-3 py-2 text-sm  bg-gray-50 border border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ShellNav;