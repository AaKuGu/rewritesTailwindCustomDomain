import React from "react";

const page = ({ searchParams }) => {
  const go = searchParams?.go || false;
  return (
    <div className={`${""} text-black font-bold text-5xl bg-red-500`}>
      user1 text-5xl font-bold bg-red-600 go = ${go}
    </div>
  );
};

export default page;
