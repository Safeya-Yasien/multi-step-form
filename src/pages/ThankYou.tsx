import { store } from "@/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSnapshot } from "valtio";

const ThankYou = () => {
  const snap = useSnapshot(store);
  const navigate = useNavigate();

  useEffect(() => {
    if (snap.completedStep < 4) {
      navigate("/summary");
    }
  }, [snap.completedStep, navigate]);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="flex items-center justify-center w-16 h-16 mb-6">
        <img src="/images/icon-thank-you.svg" alt="Thank you" />
      </div>
      <h2 className="text-2xl font-bold text-blue-950 mb-3 text-center">
        Thank you!
      </h2>
      <p className="text-grey-500 text-center">
        Thanks for confirming your subscription!
        <br />
        We hope you have fun using our platform. If you ever need support,
        please feel free to email us at <br />
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
