"use client";
import { useState } from "react";
import Link from "next/link";

export default function Blog() {
  const fetch_url = "https://httpbin.org/delay/1";
  const [status, setStatus] = useState(999);
  const url = "7s6vn8pr.jpg";

  fetch(fetch_url)
    .then((d) => {
      const nstatus = d.status;
      setStatus(nstatus);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <>
      <h1>My Blog</h1>
      <Link href="/blog/first">First blog</Link>
      <img src={url}></img>
      <p>{status}</p>
    </>
  );
}
