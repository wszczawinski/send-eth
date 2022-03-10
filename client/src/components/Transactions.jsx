import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import dummyData from "../utils/dummyData";

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const shortenAddressFrom = `${addressFrom.slice(0, 5)}...${addressFrom.slice(
    addressFrom.length - 4
  )}`;
  const shortenAddressTo = `${addressTo.slice(0, 5)}...${addressTo.slice(
    addressTo.length - 4
  )}`;

  return (
    <div
      className="m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[350px]
      min-w-full border
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col flex-wrap items-center w-full">
        <div className="text-sm flex flex-col w-full p-2">
          <a
            href={`https://rinkeby.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>From: {shortenAddressFrom}</p>
          </a>
          <a
            href={`https://rinkeby.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>To: {shortenAddressTo}</p>
          </a>
          <p> Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p>Message: {message}</p>
            </>
          )}

          <div className="bg-black p-3 px-5 w-max rounded-3x1 -mt-5">
            <p> {timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { currentAccount } = useContext(TransactionContext);
  return (
    <section className="flex w-full text-white justify-center items-center 2xl:px-20 ">
      <div className="flex flex-col md:p-12 py-12 px-4 max-w-[1050px]">
        {currentAccount ? (
          <h3 className="text-3xl text-center my-2">Latest transactions</h3>
        ) : (
          <h3 className="text-3xl text-center my-2">
            Connect your wallet to see transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {dummyData.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Transactions;
