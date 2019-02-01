import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/sell">
      <a>Go to sell page</a>
    </Link>

    <Link href="/">
      <a>Back to home</a>
    </Link>
  </div>
);

export default Nav;
