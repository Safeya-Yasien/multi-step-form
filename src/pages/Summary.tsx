import { Heading } from "@/components/common";
import { useNavigate } from "react-router";

const Summary = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    console.log("Confirm");
  };

  const handleBack = () => {
    navigate("/add-ons");
  };

  return (
    <div className="flex flex-col h-full justify-between gap-12">
      <div className="flex flex-col">
        <Heading
          title="Finishing up"
          description="Double-check everything looks OK before confirming."
        />

        {/* Summary Card */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="font-bold text-blue-950">Arcade (Monthly)</div>
              <button className="text-grey-500 underline text-sm hover:text-purple-600 transition">
                Change
              </button>
            </div>
            <div className="font-bold text-blue-950">$9/mo</div>
          </div>
          <hr className="border-blue-100 mb-4" />
          <div className="flex justify-between items-center mb-2">
            <div className="text-grey-500 text-sm">Online service</div>
            <div className="text-blue-950 text-sm">+$1/mo</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-grey-500 text-sm">Larger storage</div>
            <div className="text-blue-950 text-sm">+$2/mo</div>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center px-6 mb-2">
          <div className="text-grey-500 text-base">Total (per month)</div>
          <div className="text-purple-600 text-xl font-bold">+$12/mo</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-20">
        <button
          type="button"
          className="text-grey-500 font-medium hover:underline transition cursor-pointer"
          onClick={handleBack}
        >
          Go Back
        </button>
        <button
          type="submit"
          className="bg-purple-600 text-white font-medium rounded-lg px-8 py-3 hover:bg-purple-700 transition cursor-pointer"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
export default Summary;
