import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Product = ({
  product: { image, name, slug, price, pricedis, diskon },
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  // const toLogin = () => {
  //   router.push({
  //     pathname: '/auth/signin',
  //     query: { from: router.pathname },
  //   });
  // };
  if (!diskon) {
    return (
      <Link href={`/products/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image object-fit p-4"
          />
          <p className="product-name font-semibold">{name}</p>
          <p className="product-price">Rp {price}</p>
        </div>
      </Link>
    );
  }
  if (!session) {
    return (
      <button type="button" onClick={signIn}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image object-fit p-4"
          />
          <p className="product-name font-semibold">{name}</p>
          {!diskon ? (
            <p className="   font-bold text-2xl text-red-500">Rp {price}</p>
          ) : (
            <div>
              <p className=" font-bold text-lg line-through decoration-2 decoration-red-500 text-black">
                Rp {price}
              </p>
              <p className=" font-bold text-2xl text-red-500">Rp {pricedis}</p>
            </div>
          )}
        </div>
      </button>
    );
  } else {
    return (
      <Link href={`/products/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image object-fit p-4"
          />
          <p className="product-name font-semibold">{name}</p>
          {!diskon ? (
            <p className="   font-bold text-2xl text-red-500">Rp {price}</p>
          ) : (
            <div>
              <p className=" font-bold text-lg line-through decoration-2 decoration-red-500 text-black">
                Rp {price}
              </p>
              <p className=" font-bold text-2xl text-red-500">Rp {pricedis}</p>
            </div>
          )}
        </div>
      </Link>
    );
  }
  // return (
  //   <div>

  //     {!diskon ? (
  //       <Link href={`/products/${slug.current}`}>
  //         <div className="product-card">
  //           <img
  //             src={urlFor(image && image[0])}
  //             width={250}
  //             height={250}
  //             className="product-image object-fit p-4"
  //           />
  //           <p className="product-name font-semibold">{name}</p>
  //           <p className="product-price">Rp {price}</p>
  //         </div>
  //       </Link>
  //     ) : (
  //       <button type="button" onClick={signIn}>
  //         <div className="product-card">
  //           <img
  //             src={urlFor(image && image[0])}
  //             width={250}
  //             height={250}
  //             className="product-image object-fit p-4"
  //           />
  //           <p className="product-name font-semibold">{name}</p>
  //           <p className="product-price">Rp {price}</p>
  //         </div>
  //       </button>
  //     )}
  //   </div>
  // );
};

export default Product;
