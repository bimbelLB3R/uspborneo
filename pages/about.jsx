import React from 'react';
import Head from 'next/head';
import Circle from '../components/Circle';
import Link from 'next/link';
import Carousel from '../components/Carousel';
import RoomIcon from '@mui/icons-material/Room';
import { client } from '../lib/client';

export const getStaticProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const kategoriQuery = '*[_type == "kategori"]';
  const kategori = await client.fetch(kategoriQuery);

  return {
    props: { products, kategori },
  };
};

const about = ({ products }) => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="flex flex-col-reverse md:grid  md:grid-cols-2">
          <div className="flex items-center justify-center m-auto p-4 md:p-16 md:relative">
            <Circle backgroundColor="#F0ABFC" left="-50vh" top="-50vh" />
            <div className="">
              <div className="mb-16 font-bold text-4xl  z-50 relative">
                <p>
                  <span className="text-fuchsia-400">USP</span> UWAIS
                </p>
                <p>SCREEN PRINTING</p>
                {products.map((item) => {
                  return <div>{item.name}</div>;
                })}
              </div>
              <div>
                <p className="text-justify">
                  Kami bekerja secara profesional dan memberikan pelayanan
                  terbaik kepada konsumen. USP sudah berdiri sejak 2017 sehingga
                  sudah cukup berpengalaman dalam menyediakan produk dengan
                  kualitas terbaik. Anda akan lebih hemat karena kami memberikan
                  harga yang kompetitif. Kami juga senantiasa menjaga komunikasi
                  dengan pelanggan agar didapatkan produk yang sesuai harapan.
                </p>
              </div>
              <div>
                <Link href="https://g.page/UWAIS_SP?share">
                  <div className="flex items-center justify-center">
                    <div>
                      <RoomIcon
                        sx={{ fontSize: 60 }}
                        className=" mt-10 text-8xl text-fuchsia-400 hover:scale-110 transition ease-in-out duration-600"
                      />
                      <p className="w-full text-center underline">Find Us</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <Circle backgroundColor="#C026D3" right="-50vh" />
            {/* <Image
            src="/images/kaos.avif"
            alt="image"
            width="100%"
            height="100%"
            objectFit="cover"
            layout="responsive"
            className=""
          /> */}
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
