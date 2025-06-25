import { BsCheck } from "react-icons/bs";

const AddOn = ({
  name,
  description,
  price,
  selected,
  onSelect,
  billing,
}: {
  name: string;
  description: string;
  price: number;
  selected: boolean;
  onSelect: () => void;
  billing: "monthly" | "yearly";
}) => {
  return (
    <div
      onClick={onSelect}
      className={`flex items-center gap-6 rounded-lg border ${
        selected ? "border-purple-600 bg-blue-100" : "border-blue-300"
      } p-4 cursor-pointer`}
    >
      <div
        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
          selected ? "bg-purple-600 border-purple-600" : "border-gray-400"
        }`}
      >
        {selected && <BsCheck className="text-white text-lg" />}
      </div>

      <div className="flex justify-between flex-1 items-center pr-2">
        <div>
          <p className="capitalize font-bold">{name}</p>
          <p className="capitalize text-grey-500">{description}</p>
        </div>

        <p className="text-sm text-purple-600">
          ${billing === "yearly" ? price * 10 : price}/
          {billing === "yearly" ? "yr" : "mo"}
        </p>
      </div>
    </div>
  );
};
export default AddOn;
