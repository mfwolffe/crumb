

// TODO @mfwolffe 
import * as fonts from '@/utils/fonts'
import React, { useState } from 'react';

import { useBashContext } from '@/context/BashContext';


import { PS1 } from '@/context/config';


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


  const { state } = useBashContext();


  return (
    <div className="relative w-3/4">
      {label && <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>}
      <div className="flex">

        <PS1 />
        
        <input
          id='cliPrompt'
          type="text"
          className={`${fonts.ubuntuSansMono.className} w-full px-3 py-2 text-sm bg-gray-50 rounded-r-md dark:bg-gray-700 dark:placeholder-gray-500 outline-none`}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ShellNav;