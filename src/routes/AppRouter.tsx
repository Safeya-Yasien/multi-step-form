import { createBrowserRouter, RouterProvider } from "react-router";

// error
import PersonalInfo from "@/pages/PersonalInfo";
import Plans from "@/pages/Plans";
import AddOns from "@/pages/AddOns";
import Summary from "@/pages/Summary";
import Error from "@/pages/Error";
import MainLayout from "@/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <PersonalInfo />,
      },
      {
        path: "plans",
        element: <Plans />,
      },
      {
        path: "add-ons",
        element: <AddOns />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
