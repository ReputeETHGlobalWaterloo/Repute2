import { useState } from "react";
import { BigNumber } from "ethers";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const ProposalInput = () => {
  const [_dealType, setDealType] = useState("");
  const [_opportunityName, setOpportunityName] = useState("");
  const [_expiryBlock, setExpiryBlock] = useState(0);
  const [_sellerDeposit, setSellerDeposit] = useState(0);
  const [_buyerDeposit, setBuyerDeposit] = useState(0);

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "OTCV2",
    functionName: "postOffer",
    args: [
      _dealType,
      _opportunityName,
      BigNumber.from(_expiryBlock), // Assign BigNumber directly without calling toString()
      BigNumber.from(_sellerDeposit), // Assign BigNumber directly without calling toString()
      BigNumber.from(_buyerDeposit), // Assign BigNumber directly without calling toString()
    ],
    value: _sellerDeposit.toString(),
  });

  return (
    <div className="hero min-h-screen bg-base-200 p-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left pl-10">
          <h1 className="text-5xl font-bold">Post the deal now!</h1>
          <p className="py-6">
          Have a special investment opportunity to sell? Post your offer here.
          Just fill in the type of opportunity your are offering (i.e. claims, SAFT, or SAFE),
          some details on the opportunity, your asking price, the expiration time of the offer,
           and the amount of collateral that you want to post.

          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deal Type</span>
              </label>
              <input type="text" placeholder="SAFT" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Opportunity Name</span>
              </label>
              <input type="text" placeholder="I want to sell XXX for XXX$" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Expiry Block</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="100000000" className="input input-bordered" />
                <span>BTC</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller&apos; deposit</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="1000000000000" className="input input-bordered" />
                <span>Wei</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Buyer&apos; deposit</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="v" className="input input-bordered" />
                <span>Wei</span>
              </label>
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
