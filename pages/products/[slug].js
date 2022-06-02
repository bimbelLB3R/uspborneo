import React, { useState } from 'react';
import { client, urlFor } from '../../lib/client';
import Product from '../../components/Product';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext';
import SearchBar from '../../components/SearchBar';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };
  return (
    <div>
      <SearchBar products={products} />
      <div className=" md:flex text-gray-900 md:p-10 lg:p-20">
        <div className="md:w-1/2 lg:w-2/5 flex items-center justify-center p-5 md:p-0 relative">
          {/* <div className="absolute top-6 right-6  bg-red-500 p-2 text-gray-50 rounded-tr-xl rounded-br-xl text-xl font-bold italic ">
            <p>Off 10%</p>
          </div> */}
          <div>
            <img
              src={urlFor(image && image[index])}
              className=" h-[350px] md:h-[400px] w-full md:w-[350px] object-contain rounded-xl shadow-xl"
            />
            <div className="small-images-container">
              {image?.map((item, i) => (
                <img
                  key={i}
                  src={urlFor(item)}
                  className={
                    i === index ? 'small-image selected-image' : 'small-image'
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" ml-6 md:w-1/2 lg:w-3/5 space-y-4 ">
          <h1 className="text-3xl uppercase font-black tracking-widest">
            {name}
          </h1>
          <div className=" flex items-center space-x-2">
            <div className="flex text-red-500">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4 className="font-bold text-xl">Details: </h4>
          <p className="text-sm">{details}</p>
          <p className=" font-bold text-2xl text-red-500">Rp {price}</p>
          <div className=" flex space-x-4 items-center">
            <h3 className="font-bold text-xl">Quantity:</h3>
            <p className=" flex space-x-4 items-center ">
              <span
                className="minus border-2 p-2 hover:cursor-pointer"
                onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className=" ">{qty}</span>
              <span
                className=" border-2 p-2 hover:cursor-pointer"
                onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className=" flex space-x-4 ">
            <button
              type="button"
              className="w-[150px] border-2 border-red-500 py-2 px-6 flex items-center justify-center hover:scale-110 ease-in duration-300"
              onClick={() => onAdd(product, qty)}>
              Add to Cart
            </button>
            <button
              type="button"
              className="w-[150px] py-2 px-6 flex items-center justify-center bg-red-500 hover:scale-110 ease-in duration-300"
              onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2 className="font-bold">You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// fetching data product from sanity

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
