import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";
import { Heading } from "@/components/common";

const plans = [
  {
    name: "Arcade",
    price: "$9/mo",
    icon: (
      <span className=" text-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl">
        {/* Replace with your SVG */}
        <img src={iconArcade} alt="Arcade" className="w-10 h-10" />
      </span>
    ),
    selected: true,
  },
  {
    name: "Advanced",
    price: "$12/mo",
    icon: (
      <span className="bg-pink-100 text-pink-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl">
        <img src={iconAdvanced} alt="Arcade" className="w-10 h-10" />
      </span>
    ),
    selected: false,
  },
  {
    name: "Pro",
    price: "$15/mo",
    icon: (
      <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
        <img src={iconPro} alt="Arcade" className="w-10 h-10" />
      </span>
    ),
    selected: false,
  },
];

const Plans = () => {
  return (
    <div className="flex flex-col h-full justify-between gap-12">
      <div className="flex flex-col">
        <Heading
          title="Select your plan"
          description="You have the option of monthly or yearly billing."
        />

        {/* Plans */}
        <div className="flex gap-4">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`flex-1 min-w-[140px] cursor-pointer rounded-lg border ${
                plan.selected ? "border-purple-600" : "border-blue-100"
              } p-4 flex flex-col items-start hover:border-purple-600 transition`}
            >
              {plan.icon}
              <div className="mt-8 font-bold text-blue-950">{plan.name}</div>
              <div className="text-grey-500 text-sm">{plan.price}</div>
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
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer left-0 top-0"
              style={{
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              }}
              checked
              readOnly
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-blue-950 cursor-pointer"
            ></label>
          </span>
          <span className="text-grey-500 font-medium ml-6">Yearly</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="text-grey-500 font-medium hover:underline transition  cursor-pointer"
        >
          Go Back
        </button>
        <button
          type="submit"
          className="bg-blue-950 text-white font-medium rounded-lg px-8 py-3 hover:bg-blue-900 transition cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
export default Plans;
