import type { IFormInputProps } from "@/types";

const FormInput = ({
  name,
  label,
  type,
  id,
  placeholder,
  register,
  error,
}: IFormInputProps) => {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="text-blue-950 font-medium text-sm block mb-1"
      >
        {label}
      </label>
      <p className="absolute right-0 top-0 text-red-500 font-medium text-sm">
        {error?.message}
      </p>
      <input
        type={type}
        id={id}
        className={`border ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-purple-200 focus:border-blue-950"
        } rounded-lg p-3 focus:outline-none  text-blue-950 text-base placeholder-gray-400 w-full `}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};
export default FormInput;
