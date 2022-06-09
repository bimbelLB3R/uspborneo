import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Promo = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
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
    </div>
  );
};

export default Promo;
