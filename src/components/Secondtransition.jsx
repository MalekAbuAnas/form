export default function Secondtransition({ transfared }) {
  return (
    <div
      className={`absolute ${
        transfared ? "bg-[#fff]" : "bg-c-brown"
      } top-0 left-0 w-0 ${
        transfared ? "p-0 rounded-r-[500px]" : "pr-[100%] rounded-r-[0]"
      } h-[100vh] duration-700 overflow-hidden ease-out`}
    >
      <h1 className="z-[300] text-[#fff] text-3xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap font-yeseva">
        You will be in there soon
      </h1>
    </div>
  );
}
