const Plan = ({
  icon,
  name,
  price,
}: {
  icon: string;
  name: string;
  price: string;
}) => {
  return (
    <div className="flex md:flex-col md:justify-between gap-4 md:gap-8 rounded-lg border border-gray-600 p-4 h-[80px] md:h-[160px] md:w-[130px] cursor-pointer">
      <div className="w-10 h-10">
        <img src={icon} alt={name} className="w-full h-full" />
      </div>

      <div>
        <p className="capitalize font-medium">{name}</p>
        <p className="text-sm text-grey-500">${price}/mo</p>
      </div>
    </div>
  );
};
export default Plan;
