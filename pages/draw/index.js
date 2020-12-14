import Layout from "./../../components/Layout/index";
import Link from "next/link";

export default function AboutUs(props) {
  return (
    <Layout>
      <div className="py-28 flex justify-center bg-white">
        <div className="container mx-auto px-10 text-center">
          <h3 className="text-2xl mb-8 text-gray-500">Coming Soon..</h3>
          <Link href="/">
            <a className="mt-6 sm:ml-4 py-2 px-3 md:px-4 rounded bg-primary text-white font-bold hover:bg-teal-300">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
