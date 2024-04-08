const ThirtyDays = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  return (
    <>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          1 - {currentMonth + 1} - 2024
        </h3>
        <div className="flex w-full items-start space-x-10">
          <input
            type="number"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
            placeholder="Number of Sold Items"
          />
          <input
            type="number"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
            placeholder="Number of Invoices"
          />
          <input
            type="number"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
            placeholder="Transaction Amount"
          />
        </div>
      </div>
    </>
  );
};

export default ThirtyDays;
