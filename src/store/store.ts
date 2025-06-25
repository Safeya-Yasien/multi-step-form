import type { BillingType } from "@/types";
import { proxy } from "valtio";

export const store = proxy({
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
