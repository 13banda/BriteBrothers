import { useEffect, useState } from "react";
import PayNowBtn from "./../../components/PayNowBtn";

export default function TicketBlock(props) {

  return (
    <div id="get-draw-ticket" className="py-52 flex justify-center">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-2 text-secondary">
        Get lottery Ticket just in 200/- and win big prize
        </h2>
        <h3 className="text-2xl mb-8 text-gray-500">
         Order online and get your ticket in your inbox.
        </h3>
        <PayNowBtn />
      </div>
    </div>
  );
}
