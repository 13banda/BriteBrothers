import Head from "next/head";
import Layout from "../components/Layout/index";
import Link from "next/link";

export default function ContactUs() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Contact Us | britebrother.in</title>
        </Head>
        <div>this is contact us page</div>
      </div>
    </Layout>
  );
}
