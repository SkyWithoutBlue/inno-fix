import type { AppProps } from 'next/app';
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import "../styles/globals.css";
import "../styles/menuburger.css";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>INNO LINK LLC</title>
        <meta name="description" content="Технологии будущего, качество без компромиссов!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
        <FloatingButton />
      </div>
    </>
  );
} 