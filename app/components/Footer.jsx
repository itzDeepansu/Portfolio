import React from "react";
import Link from "next/link";

const Footer = ({ className }) => {
  function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  }
  const handleEmailClick = (email) => {
    // Opens the email client with a new draft to the specified recipient
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className={`h-20 w-[calc(100dvw-5rem)] fixed bottom-0 grid grid-cols-6 text-xs items-end font-jetbr pb-3 bg-transparent ${className}`}>
      <ul className="list-none">
        <li className="text-mutedForeground">Your Time</li>
        <li>{getTime()}</li>
      </ul>
      <ul className="list-none z-20 relative grid rows-4">
        <Link href="https://www.linkedin.com/in/deepansu/" className="text-mutedForeground hover:text-foreground cursor-pointer w-fit">Linked In</Link>
        <Link href="https://x.com/Deepansu_S" className="text-mutedForeground hover:text-foreground w-fit cursor-pointer">Twitter</Link>
        <Link href="https://www.instagram.com/deepansu_siwach/" className="text-mutedForeground hover:text-foreground w-fit cursor-pointer">Instagram</Link>
        <a href="mailto:itzdeepansu@gmail.com" className="text-mutedForeground hover:text-foreground w-fit cursor-pointer">Gmail</a>
      </ul>
      <div></div>
      <div></div>
      <div></div>
      <ul className="list-none">
        <li>c 2024</li>
        <li className="font-bold">Zues</li>
        </ul>
    </div>
  );
};

export default Footer;
