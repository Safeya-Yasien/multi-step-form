import { Plan, PlanSwitcher } from "@/components";
import { Heading } from "@/components/common";
import { billingPlans } from "@/data";

const Plans = () => {
  return (
    <div>
      <Heading
        title={"Select your plan"}
        description={"You have the option of monthly or yearly billing."}
      />

      <form className="flex flex-col gap-6">
        {/* plan options */}
        <div className="flex flex-col md:flex-row gap-4">
          {billingPlans.map((plan) => (
            <Plan key={plan.id} {...plan} />
          ))}
        </div>

        {/* plan switch */}
<PlanSwitcher/>
        {/* go back */}
        {/* next  */}
      </form>
    </div>
  );
};
export default Plans;
