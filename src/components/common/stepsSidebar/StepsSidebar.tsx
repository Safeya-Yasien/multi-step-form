import Step from "./Step";

const StepsSidebar = ({ currentStep }: { currentStep: number }) => {
  return (
    <div
      className="
            bg-[url(./assets/images/bg-sidebar-mobile.svg)] 
            md:bg-[url(./assets/images/bg-sidebar-desktop.svg)]
            bg-cover
            flex justify-center md:justify-start
            absolute md:static top-0 w-full md:w-auto min-w-[275px]
            h-[200px] md:h-[568px]
            md:p-10 md:rounded-lg
            
          "
    >
      {/* Steps numbers and labels */}
      <ul className="flex flex-row md:flex-col gap-8 mb-15 md:mb-0">
        {/* Step 1 */}
        <Step
          stepNumber={1}
          stepLabel={"Your Info"}
          isActive={currentStep === 1}
        />
        {/* Step 2 */}
        <Step
          stepNumber={2}
          stepLabel={"Select Plan"}
          isActive={currentStep === 2}
        />
        {/* Step 3 */}
        <Step
          stepNumber={3}
          stepLabel={"Add-ons"}
          isActive={currentStep === 3}
        />
        {/* Step 4 */}
        <Step
          stepNumber={4}
          stepLabel={"Summary"}
          isActive={currentStep === 4}
        />
      </ul>
    </div>
  );
};
export default StepsSidebar;
