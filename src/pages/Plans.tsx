import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";
import { Heading } from "@/components/common";
import { useState } from "react";
import { useNavigate } from "react-router";

const planOptions = [
  {
    name: "Arcade",
    price: { monthly: "$9/mo", yearly: "$90/yr" },
    icon: (
      <span className=" text-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl">
        <img src={iconArcade} alt="Arcade" className="w-10 h-10" />
      </span>
    ),
  },
  {
    name: "Advanced",
    price: { monthly: "$12/mo", yearly: "$120/yr" },
    icon: (
      <span className="bg-pink-100 text-pink-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl">
        <img src={iconAdvanced} alt="Arcade" className="w-10 h-10" />
      </span>
    ),
  },
  {
    name: "Pro",
    price: { monthly: "$15/mo", yearly: "$150/yr" },
    icon: (
      <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
        <img src={iconPro} alt="Arcade" className="w-10 h-10" />
      </span>
    ),
  },
];

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();

  const handlePlanClick = (name: string) => {
    setSelectedPlan(name);
  };

  const handleToggle = () => {
    setIsYearly((prev) => !prev);
  };

  const handleNext = () => {
    navigate("/add-ons");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <Heading
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      {/* Plans */}
      <div className="flex gap-4">
        {planOptions.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 min-w-[140px] cursor-pointer rounded-lg border ${
              selectedPlan === plan.name
                ? "border-purple-600"
                : "border-blue-100"
            } p-4 flex flex-col items-start hover:border-purple-600 transition`}
            onClick={() => handlePlanClick(plan.name)}
          >
            {plan.icon}
            <div className="mt-8 font-bold text-blue-950">{plan.name}</div>
            <div className="text-grey-500 text-sm">
              {isYearly ? plan.price.yearly : plan.price.monthly}
            </div>
          </div>
        ))}
      </div>
      {/* Toggle */}
      <div className="bg-blue-50 rounded-lg flex items-center justify-center mt-8 py-3">
        <span className="text-blue-950 font-medium mr-6">Monthly</span>
        <span className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute appearance-none hidden cursor-pointer "
            checked={isYearly}
            onChange={handleToggle}
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-blue-950 cursor-pointer"
          ></label>
        </span>
        <span className="text-grey-500 font-medium ml-6">Yearly</span>
      </div>
      {/* Buttons */}
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="text-grey-500 font-medium hover:underline transition  cursor-pointer"
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
    </>
  );
};
export default Plans;
