import { StepsSidebar } from "@/components/common";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <main className="min-h-screen w-full bg-blue-100 flex flex-col md:justify-center relative">
      {/* container */}
      <div className="flex flex-col md:flex-row md:gap-10 items-center bg-white p-4 rounded-lg w-full md:max-w-4xl mx-auto md:max-h-[600px]">
        {/* steps sidebar */}
        <StepsSidebar />

        {/* form */}
        <div className="bg-white rounded-lg w-[90%] absolute md:static top-30 px-6 py-6 md:pb-0">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
export default MainLayout;
