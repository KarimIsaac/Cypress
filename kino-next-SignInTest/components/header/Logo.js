import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";

export default function Logo() {
  return (
    <div className="header-logo-container">
      <Link href="/">
        <Image src={logo} alt="Kino Logo" />
      </Link>
    </div>
  );
}
