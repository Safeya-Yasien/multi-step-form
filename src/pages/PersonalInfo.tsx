import { FormInput } from "@/components";
import { Heading } from "@/components/common";
import { FormInputSchema } from "@/schemas";
import { store } from "@/store/store";
import type { TFormData } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useSnapshot } from "valtio";

const PersonalInfo = () => {
  const snap = useSnapshot(store);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormInputSchema),
    defaultValues: snap.personalInfo,
  });
  const onSubmit = (data: TFormData) => {
    store.personalInfo = data;
    navigate("/plans");
  };

  return (
    <>
      <Heading
        title={"Personal Info"}
        description={
          "Please provide your name, email address, and phone number."
        }
      />

      {/* form */}
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="name"
          label="Name"
          type="text"
          placeholder="e.g. Stephen King"
          register={register}
          error={errors.name}
        />
        <FormInput
          name="email"
          label="Email Address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          register={register}
          error={errors.email}
        />
        <FormInput
          name="phone"
          label="Phone Number"
          type="text"
          placeholder="e.g. +1 234 567 890"
          register={register}
          error={errors.phone}
        />
        <div
          className="flex justify-end items-center fixed bottom-0 right-0 bg-white h-20 w-full px-8
        md:static md:px-0"
        >
          <button className="rounded-md text-white bg-blue-950 py-2 px-6 cursor-pointer md:mt-10">
            Next Step
          </button>
        </div>
      </form>
    </>
  );
};
export default PersonalInfo;
