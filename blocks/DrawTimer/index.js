import FlipCountdown from "@rumess/react-flip-countdown";

/*  <FlipCountdown
                theme="light"
                titlePosition = 'bottom'
                endAt={'2022-12-12 01:26:58'} 
            /> */
export default function DrawTimer(props) {
  return (
    <div className="bg-gray-50 md:overflow-hidden z-20">
      <div className="px-4 py-10 border-gray-200 border-t border-b">
        <div className="md:max-w-6xl md:mx-auto">
          <div className="md:flex md:flex-wrap justify-center items-center">
            <div className="md:w-1/2 text-center md:text-left ">
              <h1 className="font-extrabold text-secondary text-3xl leading-tight mb-4">
              Buy Lottery Tickets Online
              </h1>
              <p className="text-gray-500 md:text-xl md:pr-20 leading-relaxed">
              Buy lottery tickets online to the biggest lotteries in the world offering huge jackpot prizes that you can win when you play online lottery.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mt-10 md:mt-0">
              <img
                className="inline-block px-5 md:px-0"
                src="https://i.countdownmail.com/th3rc.gif"
                alt="lucky draw counter"
                border={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
