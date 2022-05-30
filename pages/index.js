import Head from 'next/head';

import Intro from '../components/Intro';
import Services from '../components/Services';
// import { data } from '../data';
import Dokumentation from '../components/Dokumentation';

import { client } from '../lib/client';

export default function Home({ products, kategori }) {
  return (
    <div className="">
      <Head>
        {/* {console.log(products)} */}
        <title>USP-STORE</title>
        <meta
          name="description"
          content="Jual Kaos Polos dan sablonnya. Wilayah Tabalong dan sekitarnya."
        />
        <meta property="og:title" content="Hayuk Kak diorder" />
        <meta property="og:url" content="https://usp-store.vercel.app" />
        <meta
          property="og:description"
          content="Jual Kaos Polos dan sablonnya. Wilayah Tabalong dan sekitarnya."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://scontent.fbpn4-1.fna.fbcdn.net/v/t1.6435-9/120727099_803928870356787_5429006033759236755_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9267fe&_nc_ohc=QUyRB3Elu7MAX-eaQMx&_nc_ht=scontent.fbpn4-1.fna&oh=00_AT-5j_z95_y9xxKFA88PA9DjiAQ17cinQcm7jDS9rCGkaQ&oe=62AE6D69"
        />
        <link rel="icon" href="/usp-logo.png" />
      </Head>
      <Intro />
      <Services products={products} kategori={kategori} />
      <Dokumentation />
    </div>
  );
}

// fetching data product from sanity

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const kategoriQuery = '*[_type == "kategori"]';
  const kategori = await client.fetch(kategoriQuery);

  return {
    props: { products, kategori },
  };
};
