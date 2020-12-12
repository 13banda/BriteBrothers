import Link from "next/link";

export default function Logo({ children }) {
  return (
      <Link href="/">
        <span className="cursor-default text-secondary font-bold md:font-extrabold uppercase text-2xl md:text-3xl">Brite<span className="text-primary">Brothers</span></span>
      </Link>
   );
}
