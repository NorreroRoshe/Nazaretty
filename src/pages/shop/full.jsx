import { Preloader, FullWidth } from "@/components";
import ProductLayout from "@/components/common/layout/ProductLayout";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Full = () => {
  const { data: allProducts, error } = useSWR(
    "../assets/json/allProducts.json",
    fetcher
  );
  const { data: filters, error2 } = useSWR(
    "../assets/json/filter.json",
    fetcher
  );

  if (error || error2) return <div>Failed to load</div>;
  if (!allProducts || !filters)
    return (
      <div>
        <Preloader />
      </div>
    );

  const allData = allProducts.products;
  const allFilter = filters.filter;
  return (
    <>
      <Head>
        <title>Katalog Nazaretty</title>
        <meta name="description" content="Shop Full Width Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ProductLayout>
          <FullWidth allData={allData} allFilter={allFilter} />
        </ProductLayout>
      </main>
    </>
  );
};

export default Full;
