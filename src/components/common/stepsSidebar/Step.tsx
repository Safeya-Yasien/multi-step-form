const Step = ({
  stepNumber,
  stepLabel,
  isActive,
}: {
  stepNumber: number;
  stepLabel: string;
  isActive: boolean;
}) => {
  return (
    <li className="flex gap-4 items-center">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full font-medium
      ${
        isActive
          ? "font-bold bg-blue-200 text-blue-950"
          : "border border-white text-white bg-transparent"
      }`}
      >
        {stepNumber}
      </div>
      <div className="hidden md:flex flex-col">
        <div className="text-grey-500 uppercase text-xs">Step {stepNumber}</div>
        <div className="text-white tracking-wide font-bold uppercase text-sm">
          {stepLabel}
        </div>
      </div>
    </li>
  );
};
export default Step;
