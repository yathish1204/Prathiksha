import Link from "next/link";
import React from "react";

const Button = ({ btnlabel, link = "#" }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 w-full py-2 rounded-lg bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white shadow-lg"
      type="button"
    >
      {btnlabel}
    </Link>
  );
};

export default Button;
