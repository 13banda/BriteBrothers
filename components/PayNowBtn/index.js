import { useEffect, useState } from "react";

export default function PayNowBtn(props) {
  const createMarkup = () => {
    let html = process.env.NEXT_PUBLIC_RAZORPAY_BUTTON_JS;
    return { __html: html };
  };
  const handlePayment = (e) => {
    if(e) e.preventDefault();
  
    // let find payment button
    let btn = document.getElementsByClassName("PaymentButton")[0];
    // click on pay btn
    console.log(btn);
    btn?.click()
  }
  return (
    <div>
      <a
        href="#"
        onClick={handlePayment}
        className="mt-6 uppercase outline-none mb-2 md:mb-0 md:mt-10 inline-block py-3 px-8 text-lg text-white font-medium bg-primary hover:bg-green-500 rounded-md shadow"
      >
        Buy Ticket Now!
      </a>
      <div className="hidden" dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}
