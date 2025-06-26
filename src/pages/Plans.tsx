import { Link, useNavigate } from "react-router";
import { useSnapshot } from "valtio";

import { Heading } from "@/components/common";
import { Plan, PlanSwitcher } from "@/components";
import { billingPlans } from "@/data";

import { store } from "@/store/store";
import { useEffect, type FormEvent } from "react";

const Plans = () => {
  const snap = useSnapshot(store);
  const navigate = useNavigate();

  useEffect(() => {
    if (snap.completedStep < 1) {
      navigate("/plans");
    }
  }, [snap.completedStep, navigate]);

  const handlePlanSelect = (planName: string) => {
    store.plan.type = planName;
  };

  const handleNextStep = (e: FormEvent) => {
    e.preventDefault();
    store.completedStep = 2;
    navigate("/add-ons");
  };

  return (
    <>
      <Heading
        title={"Select your plan"}
        description={"You have the option of monthly or yearly billing."}
      />

      <form className="flex flex-col gap-6 pb-20" onSubmit={handleNextStep}>
        {/* plan options */}
        <div className="flex flex-col md:flex-row gap-4">
          {billingPlans.map((plan) => (
            <Plan
              key={plan.id}
              {...plan}
              billing={snap.plan.billing as "monthly" | "yearly"}
              selected={snap.plan.type === plan.name}
              onSelect={() => handlePlanSelect(plan.name)}
            />
          ))}
        </div>

        {/* plan switch */}
        <PlanSwitcher />

        {/* buttons */}
        <div
          className="flex justify-between items-center fixed bottom-0 right-0 bg-white h-20 w-full px-8
        md:static md:px-0 mt-10"
        >
          <Link
            className="text-grey-500 font-medium hover:text-blue-950 capitalize"
            to={"/"}
          >
            Go back
          </Link>
          <button
            className="rounded-md text-white bg-blue-950 py-2 px-6 cursor-pointer"
            disabled={snap.plan.type === ""}
          >
            Next Step
          </button>
        </div>
      </form>
    </>
  );
};
export default Plans;
