import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Input from './Input';

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="flex-center px-4 sm:px-16 md:px-28 lg:px-0 lg:w-80 gap-2 ">
      <Input
        type="text"
        placeholder="Tìm kiếm sản phẩm"
        className="w-11/12"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="rounded-full p-1 border-primary text-primary hover:bg-primary hover:text-white">
        <AiOutlineSearch className="text-3xl" />
      </button>
    </div>
  );
};

export default SearchBox;
