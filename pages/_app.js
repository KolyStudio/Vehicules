import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect } from "react";
import Head from "next/head";
import Script from 'next/script'
import { site } from "../components/config";
import * as ga from "../utils/ga";

import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {


  useEffect(async () => {
    const { default: ReactPixel } = await import("react-facebook-pixel");
    ReactPixel.init(site.fb_pixel, null, {
      autoConfig: true,
      debug: true,
    });
  
    ReactPixel.pageView();
    ReactPixel.track("ViewContent");
  });
  const router = useRouter();
  useEffect(() => {


    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>

    
      
      <Layout>
        <Head>
        {/* <script src="//code.tidio.co/d0vtadn0l4mc4huoib9t4mncvaaijmud.js" async></script> */}
        <link rel='icon' type='image/png' href='/favicon.png' />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-PX8ZB89E9G`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-PX8ZB89E9G', {
                        page_path: window.location.pathname,
                        });
                    `,
            }}
          />

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </>
  );
}
export default MyApp;
