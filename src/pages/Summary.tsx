import { Heading } from "@/components/common";
import { store } from "@/store/store";
import { Link, useNavigate } from "react-router";
import { useSnapshot } from "valtio";
import { addOns, billingPlans } from "@/data";
import type { FormEvent } from "react";

const Summary = () => {
  const snap = useSnapshot(store);
  const navigate = useNavigate();

  const plan = snap.plan;
  const billing = plan.billing;
  const isYearly = billing === "yearly";

  const selectedPlan = billingPlans.find((p) => p.name === plan.type);
  const basePrice = selectedPlan
    ? isYearly
      ? selectedPlan.price * 10
      : selectedPlan.price
    : 0;

  const selectedAddOns = addOns.filter((item) =>
    snap.addons.includes(item.name)
  );

  const addOnsTotal = selectedAddOns.reduce((acc, item) => {
    const price = isYearly ? item.price * 10 : item.price;
    return acc + price;
  }, 0);

  const total = basePrice + addOnsTotal;

  const handleConfirm = (e: FormEvent) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  return (
    <div>
      <Heading
        title={"Finishing up"}
        description={"Double-check everything looks OK before confirming."}
      />

      <form onSubmit={handleConfirm}>
        <div className="bg-blue-100 rounded-lg p-4 flex flex-col gap-4">
          {/* plan */}
          <div className="flex items-center justify-between border-b border-grey-500 pb-4">
            <div>
              <p className="text-blue-950 font-bold capitalize">
                {plan.type} ({billing})
              </p>
              <button
                type="button"
                onClick={() =>
                  (store.plan.billing =
                    store.plan.billing === "monthly" ? "yearly" : "monthly")
                }
                className="underline text-grey-500 cursor-pointer transition-all hover:text-purple-600"
              >
                Change
              </button>
            </div>
            <p className="font-bold text-blue-950">
              ${basePrice}/{isYearly ? "yr" : "mo"}
            </p>
          </div>

          {/* add-ons  */}
          {selectedAddOns.map((addOn, idx) => (
            <div className="flex items-center justify-between" key={idx}>
              <p className="text-grey-500 font-medium">{addOn.name}</p>
              <p className="font-medium text-blue-950">
                +${isYearly ? addOn.price * 10 : addOn.price}/
                {isYearly ? "yr" : "mo"}
              </p>
            </div>
          ))}
        </div>

        {/* total */}
        <div className="flex items-center justify-between mt-4 p-4">
          <p className="text-grey-500 font-medium">
            Total (per {isYearly ? "year" : "month"})
          </p>
          <p className="font-bold text-purple-600">
            ${total}/{isYearly ? "yr" : "mo"}
          </p>
        </div>

        {/* buttons*/}
        <div
          className="flex justify-between items-center fixed bottom-0 right-0 bg-white h-20 w-full px-8
        md:static md:px-0 mt-10"
        >
          <Link
            className="text-grey-500 font-medium hover:text-blue-950 capitalize"
            to={"/add-ons"}
          >
            Go back
          </Link>
          <button
            className="rounded-md text-white bg-blue-950 py-2 px-6 cursor-pointer"
            disabled={!snap.plan.type}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Summary;
