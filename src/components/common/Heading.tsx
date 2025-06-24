const Heading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h1 className="text-3xl font-bold text-blue-950 mb-2"> {title} </h1>
      <p className="text-grey-500 text-base">{description}</p>
    </div>
  );
};
export default Heading;
