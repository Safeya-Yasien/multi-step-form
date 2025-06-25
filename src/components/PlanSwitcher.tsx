import { useState } from "react";

const PlanSwitcher = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    return;
  };

  return (
    <div className="flex items-center justify-center gap-4 rounded-lg bg-blue-100 p-4">
      <span>Monthly</span>
      <label
        htmlFor="checkbox"
        className="flex items-center gap-2 cursor-pointer w-10 h-5 bg-blue-950 rounded-full px-1"
      >
        <input
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="rounded-full appearance-none w-3 h-3 bg-white"
        />
      </label>
      <span>Yearly</span>
    </div>
  );
};
export default PlanSwitcher;
