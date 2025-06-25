const Step = () => {
  return (
    <li className="flex gap-4 items-center">
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full
            border border-gray-50 text-white"
      >
        1
      </div>

      <div className="hidden md:flex flex-col ">
        <span className="uppercase text-grey-500">Step 1</span>
        <p className="uppercase text-white font-medium">Your Info</p>
      </div>
    </li>
  );
};
export default Step;
