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
    <>
      <div className="flex items-center md:justify-center shadow-xl">
        <div className=" bg-white w-[200px] h-[300px] text-[12px] rounded-xl shadow-xl">
          <div className="flex items-center justify-center p-2 rounded-xl">
            <img
              src={urlFor(image[0])}
              alt={name}
              className=" "
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p>{promodesc}</p>
              <h3 className="text-2xl font-semibold">Off</h3>
              <h1 className="text-3xl font-bold">{diskon}%</h1>
              {session ? (
                <Link href={`/products/${slug.current}`}>
                  <button
                    type="button"
                    className="bg-red-500 px-4 py-2  text-white font-bold rounded-3xl">
                    Ambil Promo
                  </button>
                </Link>
              ) : (
                <div>
                  <button
                    type="button"
                    onClick={signIn}
                    className="bg-red-500 px-4 py-2  text-white font-bold rounded-3xl">
                    Ambil Promo
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoCard;
