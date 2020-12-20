import Image from "next/image";

/* position: absolute;
    left: 15px;
    top: 15px;
    line-height: 40px;
    color: #ccc;
    z-index: 2;
    font-size: 40px;
    font-weight: 700;
    opacity: 0.5; */
export default function HowToStart(props) {
  return (
    <section className=" text-gray-700 body-font border-t border-gray-100">
      <div
        className="w-full bg-cover bg-fixed bg-center bg-opacity-10"
        style={{
          backgroundImage: "url(/images/works/confetti.png)",
        }}
      >
        <div className="flex items-center justify-center h-full w-full bg-gray-100 bg-opacity-95">
          
        <div className="container px-5 py-24 mx-auto md:max-w-6xl">
            <div className="flex flex-wrap w-full mb-14 justify-center text-center relative">
              <h1 className="font-bold text-secondary text-5xl md:text-5xl leading-tight mb-4">
                How It Works
              </h1>
              <p className="text-gray-400 md:text-xl md:px-48 ">
                Brite Brothers is the best way to play these exciting lotteries
                from anywhere in the world.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="xl:w-1/3 md:w-1/2 w-full p-4 xl:mt-14 text-center relative">
                <h3 className="absolute left-7 top-7 text-3xl font-extrabold text-gray-300 opacity-60">
                  01
                </h3>
                <div className="bg-white px-6 py-12 rounded-lg">
                  <div class="w-20 h-20 inline-flex items-center justify-center mb-10 flex-shrink-0">
                    <Image
                      width={150}
                      height={150}
                      src="/images/works/buy.png"
                      alt="buy ticket"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-secondary title-font mb-4">
                    Buy Ticket
                  </h2>
                  <p className="leading-relaxed text-base">
                   Complete your purchase.
                  </p>
                </div>
              </div>
              <div className="w-full xl:w-1/3 md:w-1/2 p-4 text-center relative">
                <h3 className="absolute left-7 top-7 text-3xl font-extrabold text-gray-300 opacity-60">
                  02
                </h3>
                <div className="bg-white p-6 rounded-lg">
                  <div class="w-20 h-20 inline-flex items-center justify-center mb-10 flex-shrink-0">
                    <Image
                      width={150}
                      height={150}
                      src="/images/works/number.png"
                      alt="buy ticket"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-secondary title-font mb-4">
                    Get Your Number
                  </h2>
                  <p className="leading-relaxed text-base">
                    you will get lottery number on your e-mail and mobile.
                  </p>
                </div>
              </div>
              <div className="w-full xl:w-1/3 md:w-1/2 p-4 xl:mt-14 text-center relative">
                <h3 className="absolute left-7 top-7 text-3xl font-extrabold text-gray-300 opacity-60">
                  03
                </h3>
                <div className="bg-white p-6 rounded-lg">
                  <div class="w-20 h-20 inline-flex items-center justify-center mb-10 flex-shrink-0">
                    <Image
                      width={150}
                      height={150}
                      src="/images/works/prize.png"
                      alt="buy ticket"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-secondary title-font mb-4">
                    Win Lottery
                  </h2>
                  <p className="leading-relaxed text-base">
                  Start dreaming, you're almost there
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
