import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { client } from '../lib/client';

const SearchBar = ({ products, kategori, placeholder }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const handleFiltered = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = products.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };
  return (
    <div>
      <div className="search absolute top-[90px] md:top-6 left-4 md:left-[250px] z-40">
        <div className="searchInputs flex justify-between items-center max-w-[700px] md:max-w-[350px] mx-auto w-full border rounded-md text-gray-800 bg-gray-100/90 ">
          <input
            type="text"
            value={wordEntered}
            placeholder={placeholder}
            className="bg-transparent focus:outline-none w-[250px] sm:w-[400px] font-[Poppins] pl-2"
            onChange={handleFiltered}
          />
          <div className="searchIcon bg-fuchsia-400 p-1 md:p-2 rounded-lg">
            {filteredData.length === 0 ? (
              <SearchIcon className="icon" style={{ color: '#ffffff' }} />
            ) : (
              <CloseIcon
                className="icon"
                style={{ color: '#ffffff' }}
                onClick={clearInput}
              />
            )}
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResult  h-20 overflow-auto ">
            {filteredData.map((value, index) => {
              return (
                <div key={index}>
                  <a
                    href={`/products/${value.slug.current}`}
                    target="_parent"
                    rel="noreferrer">
                    <div className="bg-white text-gray-800 max-w-[700px] mx-auto w-full flex justify-center relative">
                      <p className="bg-gray-100 hover:bg-gray-300 p-1 w-full absolute">
                        {value.name}
                      </p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
