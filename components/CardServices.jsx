import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const CardServices = ({ product: { image, name, slug, price, kategori } }) => {
  return (
    <div>
      <div className="p-4 ">
        <Link href={`/products/${slug.current}`} className="">
          <div className=" hover:cursor-pointer hover:scale-105 duration-300 ease-in shadow-lg shadow-gray-400 p-4">
            <div className=" flex items-center justify-center  w-[300px] h-[300px] p-4 ">
              <img
                src={urlFor(image && image[0])}
                alt=""
                className="object-contain h-[100%] w-[100%]"
              />
            </div>
            <p className="text-center font-semibold">{name}</p>
            <p className="text-center">Rp {price}</p>
            <p className="text-center italic text-xs"> #{kategori}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardServices;
