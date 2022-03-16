import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { BsLightningCharge } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        {
          <BsLightningCharge
            fontSize={40}
            className="text-white cursor-pointer"
          />
        }
      </div>

      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <a
          className={`mx-4 cursor-pointer`}
          href={"https://www.rinkeby.io/#stats"}
          target={"_blank"}
        >
          Rinkeby
        </a>
        <a
          className={`mx-4 cursor-pointer`}
          href={"https://duckduckgo.com/?q=rinkeby+faucet"}
          target={"_blank"}
        >
          Faucet
        </a>
        <a
          className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
          href={"https://metamask.io/"}
          target={"_blank"}
        >
          Metamask
        </a>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-full h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md text-white bg-nav animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>

            <a
              className={`mx-4 cursor-pointer my-4 text-lg`}
              href={"https://www.rinkeby.io/#stats"}
              target={"_blank"}
            >
              Rinkeby
            </a>
            <a
              className={`mx-4 cursor-pointer my-4 text-lg`}
              href={"https://duckduckgo.com/?q=rinkeby+faucet"}
              target={"_blank"}
            >
              Faucet
            </a>
            <a
              className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] my-4 text-lg"
              href={"https://metamask.io/"}
              target={"_blank"}
            >
              Metamask
            </a>
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
