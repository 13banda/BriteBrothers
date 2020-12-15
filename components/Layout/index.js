import Head from "next/head";
import styles from "./index.module.css";
import Navbar from "./../NavBar";
import Footer from "./../Footer";

export const siteTitle = "Brite Brothers Lucky Draw | britebrothers.in";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1FC157" />
        <meta name="msapplication-navbutton-color" content="#1FC157" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#1FC157" />
        <title>{siteTitle}</title>
        <meta name="keywords" content="lucky draw, brite brothers, lottery,201\21" lang="en-us" />
        <meta name="description" content="brite brother lucky draw 2021, win big prize just in 200, get your ticket now, Stay tuned." />
        <link rel="icon" type="image/png" sizes="56x56" href="logo.svg" alt="brite brothers Logo" />
        <meta
          name="description"
          content="Win Prize in Lucky Draw just in 200 rupees"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/**Brite%20Brothers%20Lucky%20Draw**%20%20https%3A%2F%2Fbritebrothers.in.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg&images=https%3A%2F%2Fbritebrothers.in%2Flogo.svg&widths=auto&heights=auto`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <main className="mt-16">{children}</main>
      <Footer />
    </div>
  );
}
