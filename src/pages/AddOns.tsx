import { Heading } from "@/components/common";
import { useState } from "react";
import { useNavigate } from "react-router";

const addons = [
  {
    name: "Online service",
    desc: "Access to multiplayer games",
    price: "+$10/yr",
    checked: true,
  },
  {
    name: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: "+$20/yr",
    checked: true,
  },
  {
    name: "Customizable profile",
    desc: "Custom theme on your profile",
    price: "+$20/yr",
    checked: false,
  },
];

const AddOns = () => {
  const [selected, setSelected] = useState([true, true, false]);
  const navigate = useNavigate();

  const toggle = (idx: number) => {
    setSelected((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const handleNext = () => {
    navigate("/summary");
  };

  const handleBack = () => {
    navigate("/plans");
  };

  return (
    <div className="flex flex-col h-full justify-between gap-12 w-full">
      <div className="flex flex-col">
        <Heading
          title="Pick add-ons"
          description="Add-ons help enhance your gaming experience."
        />

        <div className="flex flex-col gap-4">
          {addons.map((addon, idx) => (
            <label
              key={addon.name}
              className={`flex items-center border-2 rounded-lg p-4 cursor-pointer transition ${
                selected[idx]
                  ? "border-purple-600 bg-blue-50"
                  : "border-purple-600/50 bg-white"
              }`}
            >
              <input
                type="checkbox"
                checked={selected[idx]}
                onChange={() => toggle(idx)}
                className="accent-purple-600 w-5 h-5 mr-5"
              />
              <div className="flex-1">
                <div className="font-bold text-blue-950">{addon.name}</div>
                <div className="text-grey-500 text-sm">{addon.desc}</div>
              </div>
              <div className="text-purple-600 font-medium">{addon.price}</div>
            </label>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-8">
        <button
          type="button"
          className="text-grey-500 font-medium hover:underline transition cursor-pointer"
          onClick={handleBack}
        >
          Go Back
        </button>
        <button
          type="submit"
          className="bg-blue-950 text-white font-medium rounded-lg px-8 py-3 hover:bg-blue-900 transition cursor-pointer"
          onClick={handleNext}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
export default AddOns;
