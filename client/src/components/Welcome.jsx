import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";
import { TransactionContext } from "../context/TransactionContext";

const buttonStyles =
  "flex flex-row text-white font-semibold justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <section className="flex w-full justify-center items-center ">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <article className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm-text-5xl text-white text-gradient py-1">
            Send Crypto <br /> lightning fast
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12w-11/12 text-base">
            Explore crypto world by making transactions with your friends.
          </p>

          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className={buttonStyles}
            >
              Connect wallet
            </button>
          )}
        </article>

        <article className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 md:w-72 w-full my-5 eth-card">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className=" w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-xs">
                  {currentAccount}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 w-full md:w-72 flex flex-col flex-1 justify-start items-center rounded-2xl border-[1px] border-gray-400">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send
              </button>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};
export default Welcome;
