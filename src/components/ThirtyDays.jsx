import React, { useState } from "react";

const ThirtyDays = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentMonth + 1,
    0
  ).getDate();

  const [soldItems, setSoldItems] = useState(Array(daysInMonth).fill(""));
  const [invoices, setInvoices] = useState(Array(daysInMonth).fill(""));
  const [transactionAmount, setTransactionAmount] = useState(
    Array(daysInMonth).fill("")
  );

  const handleSoldItemsChange = (index, value) => {
    const newSoldItems = [...soldItems];
    newSoldItems[index] = value;
    setSoldItems(newSoldItems);
  };

  const handleInvoicesChange = (index, value) => {
    const newInvoices = [...invoices];
    newInvoices[index] = value;
    setInvoices(newInvoices);
  };

  const handleTransactionAmountChange = (index, value) => {
    const newTransactionAmount = [...transactionAmount];
    newTransactionAmount[index] = value;
    setTransactionAmount(newTransactionAmount);
  };

  return (
    <>
      {[...Array(daysInMonth).keys()].map((day, index) => (
        <div key={index} className="w-4/5 flex flex-col items-start text-left">
          <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
            {day + 1} - {currentMonth + 1} - 2024
          </h3>
          <div className="flex w-full items-start space-x-10">
            <input
              type="number"
              className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
              placeholder="Number of Sold Items"
              value={soldItems[index]}
              onChange={(e) => handleSoldItemsChange(index, e.target.value)}
            />
            <input
              type="number"
              className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
              placeholder="Number of Invoices"
              value={invoices[index]}
              onChange={(e) => handleInvoicesChange(index, e.target.value)}
            />
            <input
              type="number"
              className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
              placeholder="Transaction Amount"
              value={transactionAmount[index]}
              onChange={(e) =>
                handleTransactionAmountChange(index, e.target.value)
              }
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ThirtyDays;
