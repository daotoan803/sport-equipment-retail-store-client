import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBox = () => {
  return (
    <div className="flex sm:px-16 md:px-28 lg:px-0 lg:w-80 gap-2 justify-center">
      <input
        type="text"
        className="border rounded-xl px-3 py-2 focus:outline-none focus-visible:ring focus-visible:ring-primary w-11/12"
        placeholder="Tìm kiếm sản phẩm"
      />
      <button className="rounded-full p-1 border-primary text-primary hover:bg-primary hover:text-white">
        <AiOutlineSearch className="text-3xl" />
      </button>
    </div>
  );
};

export default SearchBox;
