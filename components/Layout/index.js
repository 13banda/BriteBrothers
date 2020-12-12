import Head from "next/head";
import styles from "./index.module.css";
import Navbar from "./../NavBar";
import Footer from "./../Footer";

export const siteTitle = "Brite Brothers Luck Draw | britebrothers.in";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Win Prize in Lucky Draw just in 200 rupees"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
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
