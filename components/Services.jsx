import React from 'react';
import CardServices from './CardServices';

const Services = ({ products }) => {
  return (
    <div>
      <div>
        <p className=" border-b-4 inline-block border-green-400 font-bold text-3xl mb-10 ml-4 md:ml-20 mt-10 ">
          Our Products
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className=" flex flex-wrap items-center justify-center md:p-10">
          {products?.map((product) => (
            <div key={product._id}>
              <CardServices key={product._id} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
