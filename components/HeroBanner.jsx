import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

import { urlFor } from '../lib/client';

const HeroBanner = ({ products }) => {
  const { data: session } = useSession();
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Promo</p>
        <h3>Off</h3>
        <h1>10%</h1>
        <div className="">
          <img
            src={urlFor(products.image[1])}
            alt="headphones"
            className="hero-banner-image "
          />
        </div>

        <div>
          {session ? (
            <Link href="/products/qurban">
              <button type="button">Ambil Promo</button>
            </Link>
          ) : (
            <div>
              <button type="button" onClick={signIn}>
                Ambil Promo
              </button>
            </div>
          )}

          <div className="desc">
            <h5>Description</h5>
            <p>Pembelian selama bulan Dzulkoidah 1443 H mendapat diskon 10%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
