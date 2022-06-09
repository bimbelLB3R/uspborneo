import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { useSession, signIn, signOut } from 'next-auth/react';

const PromoCard = ({
  diskProduct: {
    image,
    name,
    slug,
    price,
    pricedisk,
    promodesc,
    diskon,
    kategori,
  },
}) => {
  const { data: session } = useSession();
  return (
    <div>
      <div className="hero-banner-container">
        <div>
          <p className="beats-solo">Promo</p>
          <h3>Off</h3>
          <h1>{diskon}%</h1>
          <div className="">
            <img
              src={urlFor(image[0])}
              alt={name}
              className="hero-banner-image "
            />
          </div>

          <div>
            {session ? (
              <Link href={`/products/${slug.current}`}>
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
              <p>{promodesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
