export default function DrawTimer(props) {
  return (
    <div className="py-40 flex justify-center border-t border-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-secondary mb-16">
          Lucky Draw Result Count Down
        </h2>
        <img
          className="inline-block px-5 md:px-0"
          src="https://i.countdownmail.com/th3rc.gif"
          alt="lucky draw counter"
          border={0}
        />
      </div>
    </div>
  );
}
