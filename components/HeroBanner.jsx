import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import PromoCard from './PromoCard';
import { urlFor } from '../lib/client';
import { Promo } from '.';

const HeroBanner = ({ products }) => {
  const { data: session } = useSession();
  const diskProducts = products.filter((product) => product.diskon > 0);
  console.log(diskProducts);
  return (
    <div className="flex items-center justify-center">
      <div className="flex md:justify-center overflow-x-scroll space-x-3 top-[400px] md:top-[300px] z-50 absolute left-0 right-0 ">
        {diskProducts.map((diskProduct) => (
          <>
            <PromoCard key={diskProduct._id} diskProduct={diskProduct} />
          </>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
