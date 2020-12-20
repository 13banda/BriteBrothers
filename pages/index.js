import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Layout from "../components/Layout/index";
import PrizeBlock from "./../blocks/Prize";
import DrawTimer from "../blocks/DrawTimer";
import Hero from "./../blocks/Hero";
import PayNowBtn from "../components/PayNowBtn";
import ProductSlider from "../blocks/ProductSlider";
import HowToStart from "../blocks/HowToStart";

export default function Home() {
  return (
    <Layout>
      <div className="bg-white md:overflow-hidden z-0">
        <div className="px-4 py-20 md:py-10">
          <div className="md:max-w-6xl md:mx-auto">
            <div className="md:flex md:flex-wrap">
              <div className="md:w-1/2 text-center md:text-left md:pt-16">
                <div className="ml-1 text-xl font-semibold text-primary leading-none uppercase mb-4">
                  lucky Draw 2021
                </div>
                <h1 className="font-bold text-secondary text-4xl md:text-5xl leading-tight mb-4">
                  Take the chance to win lottery
                </h1>
                <p className="text-gray-500 md:text-xl md:pr-20 leading-relaxed">
                  Brite Brothers is online lottery platform inspired by few
                  lover's fantasy of the ultimate lottery platfrom.
                </p>
                <PayNowBtn />
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full hidden lg:block">
                <Image
                  src="http://rockstheme.com/rocks/lotogame-live/img/about/ab.jpg"
                  height={512}
                  width={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DrawTimer />
      <ProductSlider />
      <HowToStart />
      {/*    <Hero /> */}
      {/* component */}
      {/* This is an example component */}

    </Layout>
  );
}
