const Heading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-sm font-medium text-grey-500">{description}</p>
    </div>
  );
};
export default Heading;
