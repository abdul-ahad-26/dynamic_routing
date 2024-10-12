import Link from "next/link";
import React from "react";


export default function Footer(){
    return (
        <>
        <Link href="/aboutus">About us</Link> &nbsp;| &nbsp;
        <Link href="contactus">Contact us</Link>
        </>
    )
}