import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { TFormData } from "@/types";
import { FormInputSchema } from "@/schemas";
import { Heading } from "@/components/common";
import { FormInput } from "@/components";
import { useNavigate } from "react-router";

const PersonalInfo = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: zodResolver(FormInputSchema),
  });
  const onSubmit = (data: TFormData) => navigate("/plans");

  return (
    <>
      <Heading
        title={"Personal info"}
        description={
          "Please provide your name, email address, and phone number."
        }
      />

      <form className="flex flex-col gap-8 " onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="name"
          label="Name"
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          register={register}
          error={errors.name}
        />
        <FormInput
          name="email"
          label="Email Address"
          type="email"
          id="email"
          placeholder="e.g. stephen@example.com"
          register={register}
          error={errors.email}
        />
        <FormInput
          name="phone"
          label="Phone Number"
          type="text"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          register={register}
          error={errors.phone}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-950 text-white font-medium rounded-lg px-8 py-3 md:mt-10 hover:bg-blue-900 transition cursor-pointer"
          >
            Next Step
          </button>
        </div>
      </form>
    </>
  );
};
export default PersonalInfo;
