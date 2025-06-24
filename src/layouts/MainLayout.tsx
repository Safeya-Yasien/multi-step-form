import { Outlet } from "react-router";

import { StepsSidebar } from "@/components/common";
import { useState } from "react";

const MainLayout = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-blue-100 min-h-screen w-full flex flex-col items-center md:justify-center relative">
      {/* container */}
      <div className="bg-white rounded-lg md:h-[600px] w-full lg:max-w-[940px] flex items-center flex-col md:flex-row md:gap-8 p-4 ">
        {/* steps sidebar */}
        <StepsSidebar currentStep={step} />
        {/* forms */}
        <div className="bg-white rounded-lg md:rounded absolute top-32 md:top-0 md:static pb-2 w-[90%] ">
          <div className="flex flex-col w-full px-8 mt-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
