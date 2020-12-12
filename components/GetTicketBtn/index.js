import React, { useEffect } from "react";
import Link from "next/link";

export default function GetTicketBtn(props) {
  return (
    <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row items-center sm:border-l sm:border-gray-300">
      <Link href="/#get-draw-ticket">
        <a className="sm:ml-4 py-2 px-3 md:px-4 rounded bg-primary text-white font-bold hover:bg-teal-300">
          Get your ticket
        </a>
      </Link>
    </div>
  );
}
