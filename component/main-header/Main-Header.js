import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/logo.png";
import classes from "./Main-Header.module.css";
import { MainHeaderBackG } from "./Main-Header-BackG";
import NavLink from "./NavLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackG />
      <header className={classes.header}>
        <Link className={classes.logo} href="./">
          <Image src={LogoImg} alt="the logo image" priority />
          NextLevel food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Show Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
