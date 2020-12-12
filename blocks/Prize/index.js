import { useEffect } from "react";
import classNames from "classnames";
function PrizeBox(props) {
  const { title, description, price, hoverBgColor="bg-red-600"} = props;

  return (
    <div
      style={{ minHeight: 176 }}
      className="group overflow-hidden relative cursor-pointer flex flex-1 justify-center items-center my-1 shadow-md bg-white rounded-lg"
    >
      <h2 className="text-3xl text-secondary">
        <span>{title}</span>
      </h2>
      <div className={classNames([hoverBgColor,"p-6 text-center transition-transform ease-in-out duration-500 overflow-hidden cursor-pointer absolute top-0 left-0 flex w-full h-full justify-center items-center text-lg text-white transform scale-0 group-hover:transform group-hover:scale-100"])} >
        {description + ` Worth ₹ ${price} /-`}
      </div>
    </div>
  );
}
export default function PrizeBlock(props) {
  const prizeList = [
    {
      title: "Bike",
      description: "Hero HF deluxe bike",
      price: "80,000",
      hoverBgColor: "bg-gray-500"
    },
    {
      title: "Freez",
      description: "Freez",
      price: "12,000",
      hoverBgColor: "bg-red-600"
    },

    {
      title: "LED",
      description: "Led",
      price: "12,000",
      hoverBgColor: "bg-gray-600"
    },
    {
      title: "Phone",
      description: "Phone",
      price: "10,000",
      hoverBgColor: "bg-green-600"
    },
    {
      title: "Camera",
      description: "Camera",
      price: "27,000",
      hoverBgColor: "bg-blue-600"
    },
    {
      title: "Mircowave oven",
      description: "Samsung 23 L Solo Oven",
      price: "9,000",
      hoverBgColor: "bg-purple-600"
    },
    {
      title: "Washing Machine",
      description: "Washing Machine",
      price: "8,000",
      hoverBgColor: "bg-pink-600"
    },
    {
      title: "Cooler",
      description: "Cooler",
      price: "7,000",
      hoverBgColor: "bg-red-600"
    },
    {
      title: "Fan",
      description: "Fan",
      price: "15,00",
      hoverBgColor: "bg-blue-400"
    },
    {
      title: "Juicer",
      description: "Juicer",
      price: "12,00",
      hoverBgColor: "bg-red-800"
    },
  ];
  return (
    <div id="prize" className="py-16 flex justify-center bg-gray-100">
      <div className="container mx-auto px-10 text-center">
        <h2 className="text-4xl font-bold mb-2 text-secondary">
          Lottery Prize
        </h2>
        <h3 className="text-2xl mb-8 text-gray-500">
          Prize scheme for lucky Draw 2021
        </h3>
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
          {prizeList.map((item) => {
            return <PrizeBox {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}
