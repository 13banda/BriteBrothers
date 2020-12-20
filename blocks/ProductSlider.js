import React from "react";
import Slider from "react-slick";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const prizeList = [
  {
    title: "Bike",
    description: "Hero HF deluxe bike",
    price: "80,000",
    hoverBgColor: "bg-gray-500",
    imageUrl: "/images/bike.jpg",
  },
  {
    title: "Freez",
    description: "Freez",
    price: "12,000",
    hoverBgColor: "bg-red-600",
    imageUrl: "/images/referigerator.png",
  },

  {
    title: "LED",
    description: "Led",
    price: "12,000",
    imageUrl: "/images/tv.png",
    hoverBgColor: "bg-gray-600",
  },
  {
    title: "Phone",
    description: "Phone",
    price: "10,000",
    hoverBgColor: "bg-green-600",
    imageUrl: "/images/phone.jpg",
  },
  {
    title: "Camera",
    description: "Camera",
    price: "27,000",
    hoverBgColor: "bg-blue-600",
    imageUrl: "/images/camera.png",
  },
  {
    title: "Mircowave oven",
    description: "Samsung 23 L Solo Oven",
    price: "9,000",
    hoverBgColor: "bg-purple-600",
    imageUrl: "/images/oven.png",
  },
  {
    title: "Washing Machine",
    description: "Washing Machine",
    price: "8,000",
    hoverBgColor: "bg-pink-600",
    imageUrl: "/images/washing-machine.png",
  },
  {
    title: "Cooler",
    description: "Cooler",
    price: "7,000",
    hoverBgColor: "bg-red-600",
    imageUrl: "/images/cooler.png",
  },
  {
    title: "Fan",
    description: "Fan",
    price: "15,00",
    hoverBgColor: "bg-blue-400",
    imageUrl: "/images/fan.png",
  },
  {
    title: "Juicer",
    description: "Juicer",
    price: "12,00",
    imageUrl: "/images/juicer.png",
    hoverBgColor: "bg-red-800",
  },
];
function PrizeBox(props) {
  const {
    title,
    description,
    imageUrl,
    price,
    hoverBgColor = "bg-red-600",
  } = props;

  return (
    <div
      className="outline-none py-3 m-3 shadow-md overflow-hidden relative cursor-pointer   bg-white rounded-lg"
    >
      <Image className="outline-none min-h-72" width={200} height={150} src={imageUrl} alt={description} />
      <h2 className="text-3xl text-secondary">
        <span>{title}</span>
      </h2>
    </div>
  );
}
export default function ProductSlider(props) {
  var settings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-20 flex justify-center outline-none ">
      <div className="container mx-auto px-6 text-center md:max-w-6xl">
        <h2 className="text-4xl font-bold mb-11 text-secondary">
          Get lottery Ticket just in 200/- and win big prize
        </h2>
       {/*  <h3 className="text-2xl mb-8 text-gray-500">
          Order online and get your ticket in your inbox.
        </h3> */} 
        <Slider {...settings}>
          {prizeList.map((item, index) => {
            return <PrizeBox key={"prize" + index} {...item} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
