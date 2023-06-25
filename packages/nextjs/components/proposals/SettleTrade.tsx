import { useState } from "react";
import { CopyIcon } from "./assets/CopyIcon";
import { DiamondIcon } from "./assets/DiamondIcon";
import { HareIcon } from "./assets/HareIcon";
import { ArrowSmallRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { BigNumber } from "ethers";

export const ContractInteraction = () => {

  const [_dealId, setDealID] = useState(0);

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "OTCV2",
    functionName: "settleTrade",
    args: [
      BigNumber.from(_dealId), // Assign BigNumber directly without calling toString()
    ]
  });

  return (
    
    <div className="hero min-h-screen bg-base-200 p-20">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left pl-10">
        <h1 className="text-5xl font-bold">Settle a Deal</h1>
        <p className="py-6">
        Are you an attester assigned to a deal? After you confirm that the off-chain asset is 
        delivered, you can settle a trade by specifying the deal ID. After a trade is settled, 
        the payments and collateral will be released to counter parties.
        </p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
            <span className="label-text">Deal to be settled</span>
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
