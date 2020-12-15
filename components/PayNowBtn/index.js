import { useEffect, useState } from "react";

export default function PayNowBtn(props) {
  const createMarkup = () => {
    let html = process.env.NEXT_PUBLIC_RAZORPAY_BUTTON_JS;
    return { __html: html };
  };
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
