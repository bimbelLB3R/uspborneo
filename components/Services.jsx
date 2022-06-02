import React, { useEffect, useMemo, useState } from 'react';
import CardServices from './CardServices';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

let makanan = 'makanan';

const Services = ({ products, kategori }) => {
  const [listProduct, setListProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const defaultProducts = products;
  const [alignment, setAlignment] = React.useState('all');
  // {
  //   console.log(defaultProducts);
  // }
  // Add default value on page load
  useEffect(() => {
    setListProduct(defaultProducts);
  }, []);

  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return listProduct;
    }
    return listProduct.filter((item) => item.kategori === selectedCategory);
  }
  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, listProduct]);
  function handleCategoryChange(event, newAlignment) {
    setSelectedCategory(event.target.value);
    setAlignment(newAlignment);
  }
  return (
    <div>
      <div className="">
        <div className="  font-bold text-3xl mb-10 ml-4 md:ml-20 mt-10 flex items-center justify-center">
          <p className="border-b-4  border-green-400">Our Products</p>
        </div>
        <div className="flex items-center justify-center">
          <ToggleButtonGroup
            exclusive
            color="success"
            value={alignment}
            onChange={handleCategoryChange}>
            <ToggleButton value="">All</ToggleButton>
            {kategori?.map((itemKategori, index) => (
              <ToggleButton value={itemKategori.kategori} key={index}>
                {itemKategori.kategori}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>

        {/* <div className="rounded">
          <select
            onChange={handleCategoryChange}
            className="bg-white border-b-4 border-green-400 p-1 text-lg">
            <option value="" className="font-bold text-3xl">
              All
            </option>
            {kategori?.map((itemKategori) => (
              <option value={itemKategori.kategori}>
                {itemKategori.kategori}
              </option>
            ))}
          </select>
        </div> */}
      </div>

      <div className="flex items-center justify-center">
        {/* tampilan default */}
        <div className=" flex flex-wrap items-center justify-center md:p-10">
          {filteredList?.map((product) => (
            <div key={product._id}>
              <CardServices key={product._id} product={product} />
            </div>
          ))}
        </div>
        {/* <div className=" flex flex-wrap items-center justify-center md:p-10">
          {products?.map((product) => (
            <div key={product._id}>
              <CardServices key={product._id} product={product} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Services;
