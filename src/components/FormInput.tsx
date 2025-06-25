const FormInput = ({
  name,
  label,
  type,
  placeholder,
}: {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-blue-950 font-medium text-sm block mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        className="border border-purple-200 rounded-lg p-3 focus:outline-none focus:border-blue-950 text-blue-950 text-base placeholder-gray-400 w-full"
        placeholder={placeholder}
      />
    </div>
  );
};
export default FormInput;
