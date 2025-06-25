const Plan = ({
  icon,
  name,
  price,
  selected,
  onSelect,
  billing,
}: {
  icon: string;
  name: string;
  price: number;
  selected: boolean;
  onSelect: () => void;
  billing: "monthly" | "yearly";
}) => {
  return (
    <div
      onClick={onSelect}
      className={`flex md:flex-col md:justify-between gap-4 md:gap-8 rounded-lg border ${
        selected ? "border-purple-600 bg-blue-100" : "border-blue-300"
      } p-4 h-[100px] md:h-[180px] md:w-[140px] cursor-pointer`}
    >
      <div className="w-10 h-10">
        <img src={icon} alt={name} className="w-full h-full" />
      </div>

      <div className="">
        <p className="capitalize font-bold ">{name}</p>
        <p className="text-sm text-grey-500">
          ${billing === "yearly" ? price * 10 : price}/
          {billing === "yearly" ? "yr" : "mo"}
        </p>
        {billing === "yearly" && (  
          <p className="text-sm text-purple-600">2 months free</p>
        )}
      </div>
    </div>
  );
};
export default Plan;
