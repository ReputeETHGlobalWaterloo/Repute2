import { useState } from "react";
import { CopyIcon } from "./assets/CopyIcon";
import { DiamondIcon } from "./assets/DiamondIcon";
import { HareIcon } from "./assets/HareIcon";
import { ArrowSmallRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { BigNumber } from "ethers";

export const ContractInteraction = () => {

  const [_dealId, setDealID] = useState(0);
  const [_newExpiry, setNewExpiry] = useState(0);

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "OTCV2",
    functionName: "extendExpiry",
    args: [
      BigNumber.from(_dealId), // Assign BigNumber directly without calling toString()
      BigNumber.from(_newExpiry)
    ]
  });

  return (
    <div>
    {/* Add input components for _dealType, _opportunityName, _expiryBlock, _sellerDeposit, _buyerDeposit */}
    <label>Deal to be extended:</label>
    <input
      type="number"
      value={_dealId}
      onChange={(e) => setDealID(e.target.valueAsNumber)} 
    />
    <label>New expiry:</label>
    <input
      type="number"
      value={_newExpiry}
      onChange={(e) => setNewExpiry(e.target.valueAsNumber)} 
    />
    {/* Add button or trigger to call writeAsync */}
    <button onClick={writeAsync}>Call writeAsync</button>
  </div>
  );
};
