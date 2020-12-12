import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../components/Layout/index";
import TicketBlock from "./../blocks/Ticket";
import PrizeBlock from "./../blocks/Prize";

export default function Home() {
  return (
    <Layout>
      <PrizeBlock />
      <TicketBlock />
    </Layout>
  );
}
