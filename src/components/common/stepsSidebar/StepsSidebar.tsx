import { sidebarSteps } from "@/data";
import Step from "./Step";
import { useLocation } from "react-router";

const stepMap: Record<string, number> = {
  "/": 1,
  "/plans": 2,
  "/add-ons": 3,
  "/summary": 4,
  "/thank-you": 4,
};

const StepsSidebar = () => {
  const location = useLocation();
  const currentStep = stepMap[location.pathname] || 1;

  return (
    <div
      className="bg-[url(/images/bg-sidebar-mobile.svg)] md:bg-[url(/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover md:rounded-lg
    absolute md:static top-0 w-full md:w-auto min-w-[275px] h-[200px] md:h-[560px]
    md:p-10 
    "
    >
      <ul className="flex flex-row md:flex-col items-center justify-center md:items-start gap-4 md:gap-8 mt-10 md:mt-0">
        {sidebarSteps.map((step) => (
          <Step
            key={step.title}
            {...step}
            isActive={currentStep === step.number}
          />
        ))}
      </ul>
    </div>
  );
};
export default StepsSidebar;
