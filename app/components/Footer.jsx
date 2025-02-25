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
    <div className={`bg-background/80 backdrop-blur-md max-h-16 w-[calc(100dvw-5rem)] fixed bottom-0 grid grid-cols-2 lg:grid-cols-6 text-xs items-end font-jetbr pb-1 ${className}`}>
      <ul className="list-none hidden lg:block">
        <li className="text-mutedForeground">Your Time</li>
        <li>{getTime()}</li>
      </ul>
      <ul className="list-none z-10 relative grid rows-4">
        <Link href="https://www.linkedin.com/in/deepansu/" className="text-mutedForeground hover:text-foreground cursor-pointer w-fit">Linked In</Link>
        <Link href="https://x.com/Deepansu_S" className="text-mutedForeground hover:text-foreground w-fit cursor-pointer">Twitter</Link>
        <Link href="https://www.instagram.com/deepansu_siwach/" className="text-mutedForeground hover:text-foreground w-fit cursor-pointer">Instagram</Link>
        <a href="mailto:itzdeepansu@gmail.com" className="text-mutedForeground hover:text-foreground w-fit cursor-pointer">Gmail</a>
      </ul>
      <div className="bg-transparent hidden lg:block"></div>
      <div className="bg-transparent hidden lg:block"></div>
      <div className="bg-transparent hidden lg:block"></div>
      <ul className="list-none flex flex-col justify-end items-end">
        <li>c 2024</li>
        <li className="font-bold">Zues</li>
        </ul>
    </div>
  );
};

export default Footer;
