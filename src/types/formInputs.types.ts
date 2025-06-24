import type { FieldError, UseFormRegister } from "react-hook-form";

export interface IFormInputProps {
  name: keyof TFormData;
  label: string;
  type?: string;
  id?: string;
  placeholder?: string;
  register: UseFormRegister<TFormData>;
  error?: FieldError | undefined;
}

export type TFormData = {
  name: string;
  email: string;
  phone: string;
};
