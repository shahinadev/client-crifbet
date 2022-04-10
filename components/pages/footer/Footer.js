import React from "react";
import Image from "next/image"
const Footer = () => {
  return (
    <footer className="bg-slate-600">
      <Image
        height="100"
        width="300"
        src="/footer.png"
        alt="footer image"
        className="mx-auto py-7"
      />
      <p className="text-1xl px-32 sm:px-6 text-slate-300">
        Bettings are designed to entertain. Keep in mind that you're taking risk
        of losing money when you bet. Please don't spend more than you can
        afford to lose. May the odds always be in your favor.
      </p>
      <p className="text-1xl px-32 text-slate-300 my-5">
        &copy;2022 Crifbet is Cyprus operated professional online gaming
        platform as a License Holder (Curacao license No. 4086/ZJA). operated by
        ALBERTUS LTD (reg. number HE 513504) registered at at 8, Koulli
        Chatziantoniou 1027, Nicosia, Cyprus. It is licensed and regulated by
        the Curacao Gaming Commission. All rights reserved.
      </p>
      <p className="text-1xl flex justify-center items-center text-slate-300 pb-5">
        <Image
          src="/18.svg"
          alt="logo"
          width="25"
          height="25"
          className="bg-slate-600 mx-2"
        />
        Responsible GamingRESPONSIBLE GAMING
      </p>
    </footer>
  );
};

export default Footer;
