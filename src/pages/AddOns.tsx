import { AddOn } from "@/components";
import { Heading } from "@/components/common";
import { addOns } from "@/data";
import { store } from "@/store/store";
import { useEffect, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useSnapshot } from "valtio";

const AddOns = () => {
  const snap = useSnapshot(store);
  const navigate = useNavigate();

  useEffect(() => {
    if (snap.completedStep < 2) {
      navigate("/add-ons");
    }
  }, [snap.completedStep, navigate]);

  const handleSelect = (name: string) => {
    const index = store.addons.indexOf(name);
    if (index > -1) {
      store.addons.splice(index, 1);
    } else {
      store.addons.push(name);
    }
  };

  const handleNextStep = (e: FormEvent) => {
    e.preventDefault();
    store.completedStep = 3;
    navigate("/summary");
  };

  return (
    < >
      <Heading
        title={"Pick your add-ons"}
        description={"Add-ons help enhance your gaming experience."}
      />

      <form className="flex flex-col gap-6 pb-20" onSubmit={handleNextStep}>
        <div className="flex flex-col gap-4">
          {addOns.map((addOn) => (
            <AddOn
              key={addOn.id}
              {...addOn}
              selected={snap.addons.includes(addOn.name)}
              onSelect={() => handleSelect(addOn.name)}
              billing={snap.plan.billing || "monthly"}
            />
          ))}
        </div>

        <div
          className="flex justify-between items-center fixed bottom-0 right-0 bg-white h-20 w-full px-8
        md:static md:px-0 mt-10"
        >
          <Link
            className="text-grey-500 font-medium hover:text-blue-950 capitalize"
            to={"/plans"}
          >
            Go back
          </Link>
          <button
            className="rounded-md text-white bg-blue-950 py-2 px-6 cursor-pointer"
            disabled={snap.addons.length === 0}
          >
            Next Step
          </button>
        </div>
      </form>
    </>
  );
};

export default AddOns;
