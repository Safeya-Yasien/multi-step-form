import Step from "./Step";

const StepsSidebar = () => {
  return (
    <div
      className="bg-[url(/images/bg-sidebar-mobile.svg)] md:bg-[url(/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover md:rounded-lg
    absolute md:static top-0 w-full md:w-auto min-w-[275px] h-[200px] md:h-[560px]
    md:p-10 
    "
    >
      <ul className="flex flex-row md:flex-col items-center justify-center md:items-start gap-4 md:gap-8 mt-10 md:mt-0">
        <Step />
        <Step />
        <Step />
        <Step />
      </ul>
    </div>
  );
};
export default StepsSidebar;
