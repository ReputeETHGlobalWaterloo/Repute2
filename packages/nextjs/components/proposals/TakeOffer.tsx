import { useState } from "react";
import { CopyIcon } from "./assets/CopyIcon";
import { DiamondIcon } from "./assets/DiamondIcon";
import { HareIcon } from "./assets/HareIcon";
import { BigNumber } from "ethers";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";


export const TakeOffer = () => {

  const [_dealId, setDealID] = useState(0);
  const [_sellerDeposit, setSellerDeposit] = useState(0);

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "OTCV2",
    functionName: "takeOffer",
    args: [
      BigNumber.from(_dealId), // Assign BigNumber directly without calling toString()
    ],
    value: _sellerDeposit.toString(),
  });

  return (
<div className="hero min-h-screen bg-base-200 p-20">
<div className="hero-content flex-col lg:flex-row-reverse">
  <div className="text-center lg:text-left pl-10">
    <h1 className="text-5xl font-bold">Take deal</h1>
    <p className="py-6">
    Have a special investment opportunity that you are interested? You can take the offer by fill in the deal ID.
    Your payments will be drawn from your address to the smart contract, and your payment will only be released to
    the seller after an attester confirms the off-chain asset is delivered.
    </p>
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Deal to be taken:</span>
        </label>
        <input type="number" placeholder="0" className="input input-bordered" />
      </div>
      
      <div className="form-control mt-6">
        <button
          className={`btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${
            isLoading ? "loading" : ""
          }`}
          onClick={writeAsync}
        >
          {!isLoading && (
            <>
              Send <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
            </>
          )}
        </button>
      </div>
    </div>
  </div>
</div>
</div>
  );
};
