import { store } from "@/store/store";
import { useSnapshot } from "valtio";

const PlanSwitcher = () => {
  const snap = useSnapshot(store);

  const handleChange = () => {
    store.plan.billing = snap.plan.billing === "monthly" ? "yearly" : "monthly";
  };

  const isYearly = snap.plan.billing === "yearly";

  return (
    <div className="flex items-center justify-center gap-4 rounded-lg bg-blue-100 p-4">
      <span className={isYearly ? "text-gray-400" : "text-blue-950 font-bold"}>
        Monthly
      </span>
      <label
        htmlFor="checkbox"
        className="flex items-center gap-2 cursor-pointer w-10 h-5 bg-blue-950 rounded-full relative"
      >
        <input
          id="checkbox"
          type="checkbox"
          checked={isYearly}
          onChange={handleChange}
          className={`rounded-full appearance-none w-3 h-3 bg-white absolute left-1 transition-all duration-300 ${
            isYearly ? "translate-x-5" : ""
          }`}
        />
      </label>
      <span className={isYearly ? "text-blue-950 font-bold" : "text-gray-400"}>
        Yearly
      </span>
    </div>
  );
};
export default PlanSwitcher;
