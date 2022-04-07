import Benefices from "../components/Benefices";
import Description from "../components/Description";
import Details from "../components/Details";
import FAQProduit from "../components/FAQProduit";
import ImageProduit from "../components/ImageProduit";
import Infos from "../components/Infos";
import Layout from "../components/Layout";
import Reviews from "../components/Reviews";
import SEO from "../components/Seo";
import { site, produit } from "../components/config";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home() {

  const pageTitle = `${produit.name} | ${site.nom}`;

  useEffect(() => {
    hotjar.initialize(2913702, 6)
  }, []);
  return (
    <>
      <SEO title={pageTitle} />
     
      <section className='justify-center lg:flex lg:space-x-[30px] lg:px-2 xl:space-x-[40px]'>
        <ImageProduit />
        <Details />
      </section>

      {/* <Benefices /> */}
      <Description />
      <Reviews />
      <FAQProduit />
      <Infos />
    </>
  );
}
