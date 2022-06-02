import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { client } from '../lib/client';

const SearchBar = ({ products = [{ name: 'angsa' }], placeholder }) => {
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
      <div className="search absolute md:top-6 md:left-1/3 z-50">
        <div className="searchInputs flex justify-between items-center max-w-[700px] md:max-w-[350px] mx-auto w-full border rounded-md text-gray-800 bg-gray-100/90 ">
          <input
            type="text"
            value={wordEntered}
            placeholder={placeholder}
            className="bg-transparent focus:outline-none w-[250px] sm:w-[400px] font-[Poppins] "
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
            {filteredData.map((value, key) => {
              return (
                <div className="">
                  <a href={value.url} target="_blank" rel="noreferrer">
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

// fetching data product from sanity

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const kategoriQuery = '*[_type == "kategori"]';
  const kategoris = await client.fetch(kategoriQuery);

  return {
    props: { products, kategoris },
  };
};
