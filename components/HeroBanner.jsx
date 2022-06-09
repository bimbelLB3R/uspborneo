import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import PromoCard from './PromoCard';
import { urlFor } from '../lib/client';

const HeroBanner = ({ products }) => {
  const { data: session } = useSession();
  const diskProducts = products.filter((product) => product.diskon > 0);
  console.log(diskProducts);
  return (
    <div>
      {diskProducts.map((diskProduct) => (
        <PromoCard key={diskProduct._id} diskProduct={diskProduct} />
      ))}
    </div>
  );
};

export default HeroBanner;
