const list = [
  {
    pirzeText: "1st prize",
    lotteryNumber: "5089",
  },
  {
    pirzeText: "2nd prize",
    lotteryNumber: "3437",
  },
  {
    pirzeText: "3rd prize",
    lotteryNumber: "4216",
  },
  {
    pirzeText: "4th prize",
    lotteryNumber: "9484",
  },
  {
    pirzeText: "5th prize",
    lotteryNumber: "1685",
  },
  {
    pirzeText: "6th prize",
    lotteryNumber: "7628",
  },
  {
    pirzeText: "7th prize",
    lotteryNumber: "3880",
  },
  {
    pirzeText: "8th prize",
    lotteryNumber: "2245",
  },
  {
    pirzeText: "9th prize",
    lotteryNumber: "7999",
  },
  {
    pirzeText: "10th prize",
    lotteryNumber: "1007",
  },
];

const ResultBlock = (props) => {
  return (
    <div className="bg-gray-50 md:overflow-hidden z-20">
      <div className="px-4 py-10 border-gray-200 border-t border-b">
        <div className="mx-auto md:w-6/12 w-full">
          <h2 className="text-4xl text-center font-bold mb-2 text-secondary">
            Lucky Draw 2021 Results{" "}
          </h2>
          <div className="bg-white shadow-md rounded my-9">
            <table className="w-full border-collapsev text-center">
              {/*Border collapse doesn't work on this site yet but it's available in newer tailwind versions */}
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Prize
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Lottery Number
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {list.map((item) => (
                  <tr
                    key={item.pirzeText}
                    className="hover:bg-grey-lighter even:bg-gray-50"
                  >
                    <td className="py-4 px-6 border-b border-grey-light">
                      {item.pirzeText}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      <span>{item.lotteryNumber}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultBlock;
