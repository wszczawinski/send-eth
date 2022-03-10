import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";
import { TransactionContext } from "../context/TransactionContext";

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
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <section className="flex w-full justify-center items-center ">
      <div className="flex md:flex-row md:min-h-[70vh] md:items-center flex-col items-start justify-between md:p-20 py-12 px-4">
        <article className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm-text-5xl text-white py-1">
            Send ETH and GIF
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12w-11/12 text-base">
            Make testnet transactions with your friends and add gifs as a
            message.
          </p>

          <div className="p-3 justify-end md:self-center items-start flex-col rounded-xl h-40 md:w-80 w-full my-5 eth-card">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className=" w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-xs">
                  {currentAccount ? currentAccount : "0x0000000000000000000000"}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row text-white font-semibold justify-center items-center md:w-80 md:self-center my-3 p-3 border-2 rounded-full border-white bg-[#000000] cursor-pointer hover:bg-[#2546bd]"
            >
              Connect wallet
            </button>
          )}
        </article>

        <article className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
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
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-5 mb-2.5 border-[1px] p-2 rounded-full cursor-pointer border-white bg-[#000000] cursor-pointer hover:bg-[#2546bd]"
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
