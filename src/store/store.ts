import type { BillingType } from "@/types";
import { proxy } from "valtio";

export const store = proxy({
  completedStep: 0,
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  plan: {
    type: "Arcade",
    billing: "monthly" as BillingType,
  },
  addons: [] as string[],
});
