const Step = ({
  title,
  number,
  isActive,
}: {
  title: string;
  number: number;
  isActive: boolean;
}) => {
  return (
    <li className="flex gap-4 items-center">
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-full
             ${
               isActive
                 ? "text-black bg-blue-200"
                 : "border border-gray-50 text-white"
             }`}
      >
        {number}
      </div>

      <div className="hidden md:flex flex-col ">
        <span className="uppercase text-grey-500">Step {number}</span>
        <p className="uppercase text-white font-medium">{title}</p>
      </div>
    </li>
  );
};
export default Step;
