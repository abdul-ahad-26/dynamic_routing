import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <ul>
        <Link href="/">Home</Link>&nbsp;| &nbsp;
        <Link href="/country">Country</Link>&nbsp;| &nbsp;
        <Link href="/login">Login</Link>
      </ul>
    </div>
  );
}

export default Navbar;
