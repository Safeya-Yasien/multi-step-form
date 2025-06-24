import type { IFormInputProps } from "@/types";

const FormInput = ({
  name,
  label,
  type = "text",
  id,
  placeholder,
  register,
  error,
}: IFormInputProps) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor={id} className="text-blue-950 font-medium text-sm">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="border border-purple-200 rounded-lg p-3 focus:outline-none focus:border-blue-950 text-blue-950 text-base placeholder-grey-500"
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <span className="text-red-500 text-sm absolute -bottom-5 left-1"> {error.message}</span>}
    </div>
  );
};
export default FormInput;
