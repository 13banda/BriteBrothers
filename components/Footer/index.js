import Link from "next/link";
import Logo from "../Logo";
import styles from "./index.module.css";

export default function Footer({ children }) {
  return (
    <div className="bg-secondary text-gray-300 font-medium text-base">
      <div className="bg-gray-50 text-gray-600">
        <div className="max-w-6xl py-24 m-auto flex flex-wrap justify-between">
          <div className="p-5 max-w-lg">
            <Logo />
            <p className="pt-5 break-words">
              BriteBrothers Lottery Group has been developed as a very reputed
              the well-established business firm of providing secure Lottery
              online. BriteBrother’s lottery is Authorized and legal, assuring
              each player of a fair playing lottery.
            </p>
            <div className="mt-4 flex space-x-3">
              <a className="py-1 px-2 text-primary border border-primary rounded-sm justify-center hover:bg-primary hover:text-white hover:transform hover:-translate-y-1">
                <span className="ti-facebook"></span>
              </a>
              <a className="py-1 px-2 text-primary border border-primary rounded-sm justify-center hover:bg-primary hover:text-white hover:transform hover:-translate-y-1">
                <span className="ti-instagram"></span>
              </a>
              <a className="py-1 px-2 text-primary border border-primary rounded-sm justify-center hover:bg-primary hover:text-white hover:transform hover:-translate-y-1">
                <span className="ti-google"></span>
              </a>
              <a className="py-1 px-2 text-primary border border-primary rounded-sm justify-center hover:bg-primary hover:text-white hover:transform hover:-translate-y-1">
                <span className="ti-youtube"></span>
              </a>
            </div>
          </div>
          <div className="p-5 w-56">
            <div className="uppercase font-bold text-xl">Quick Links</div>
            <ul className="mt-5">
              <li className={styles.feature}>
                <span className="ti-arrow-circle-right mr-2 mt-1 align-bottom"></span>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className={styles.feature}>
                <span className="ti-arrow-circle-right mr-2 mt-1 align-bottom"></span>
                <Link href="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li className={styles.feature}>
                <span className="ti-arrow-circle-right mr-2 mt-1 align-bottom"></span>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="p-5 w-68">
            <div id="about" className="uppercase font-bold text-xl">Contact us</div>
            <ul className="mt-5">
              <li className="mb-3">
                <span className="mb-1 text-sm text-gray-500">
                  Office Location
                </span>
                <p className="break-all">
                  Rajasthan,India
                </p>
              </li>
              <li className="mb-3">
                <span className="mb-1 text-sm text-gray-500">
                  Business Phone
                </span>
                <p className="text-lg">+91 9887016252</p>
              </li>
              <li className="mb-3">
                <span className="mb-1 text-sm text-gray-500">Support mail</span>
                <p>hssehmbi1322@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-0">
        <div className="flex justify-center pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-center">
          <div className="mt-2">
            Copyright © 2020.{" "}
            <span className="text-primary">Brite Brothers</span> All Rights
            Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
