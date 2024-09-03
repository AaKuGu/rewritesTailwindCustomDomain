import Link from "next/link";
import React from "react";

const page = ({ searchParams }) => {
  const pathname = searchParams?.pathname || false;
  return (
    <div className={`${""} text-black font-bold text-5xl bg-red-500`}>
      user1 text-5xl font-bold bg-red-600 pathname = {pathname}
      <Link href="/token">link</Link>
    </div>
  );
};

export default page;
