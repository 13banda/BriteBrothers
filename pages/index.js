import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../components/Layout/index";
import TicketBlock from "./../blocks/Ticket";
import PrizeBlock from "./../blocks/Prize";
import DrawTimer from "../blocks/DrawTimer";
import Hero from "./../blocks/Hero";
import PayNowBtn from "../components/PayNowBtn";

export default function Home() {
  return (
    <Layout>
   {/*    <div className="container mx-auto px-6 text-center ">
        <div className="lg:3/6 xl:w-2/4 my-20 lg:my-40 lg:ml-28 text-center px-3  md:text-left">
          <div className="ml-1 text-xl font-semibold text-primary leading-none uppercase mb-8">
            lucky Draw 2021
          </div>
          <div className="text-6xl font-bold text-secondary leading-none">
            Take the chance to win lottery.
          </div>
          <div className="mt-6 text-lg font-light text-true-gray-500 antialiased">
            BriteBrothers is online lottery platfrom. 
          </div>
          <div className="mt-9 ">
            <PayNowBtn />
          </div>
        </div>
      </div>
      <Hero /> */}
      <PrizeBlock />
      <TicketBlock />
      <DrawTimer />

    </Layout>
  );
}
