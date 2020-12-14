import { useEffect, useState } from "react";

export default function TicketBlock(props) {

  const createMarkup = () => {
    let html =  process.env.NEXT_PUBLIC_RAZORPAY_BUTTON_JS;
    return { __html: html}
  };
  return (
    <div id="get-draw-ticket" className="py-52 flex justify-center">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-2 text-secondary">
        Get lottery Ticket just in 200/- and win big prize
        </h2>
        <h3 className="text-2xl mb-8 text-gray-500">
         Order online and get your ticket in your inbox.
        </h3>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
}
