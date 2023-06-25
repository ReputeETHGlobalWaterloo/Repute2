import { useState } from "react";
import { CopyIcon } from "./assets/CopyIcon";
import { DiamondIcon } from "./assets/DiamondIcon";
import { HareIcon } from "./assets/HareIcon";
import { ArrowSmallRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const ContractInteraction = () => {
  const [visible, setVisible] = useState(true);

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
      _expiryBlock, // Assign BigNumber directly without calling toString()
      _sellerDeposit, // Assign BigNumber directly without calling toString()
      _buyerDeposit, // Assign BigNumber directly without calling toString()
    ],
    value: _sellerDeposit.toString(),
  });

  return (
    <div>
    {/* Add input components for _dealType, _opportunityName, _expiryBlock, _sellerDeposit, _buyerDeposit */}
    <label>Deal Type:</label>
    <input
      type="text"
      value={_dealType}
      onChange={(e) => setDealType(e.target.value)}
    />
    <label>Opportunity Name:</label>
    <input
      type="text"
      value={_opportunityName}
      onChange={(e) => setOpportunityName(e.target.value)}
    />
    <label>Expiry Block:</label>
    <input
      type="number"
      value={_expiryBlock}
      onChange={(e) => setExpiryBlock(e.target.valueAsNumber)}
    />
    <label>Seller Deposit:</label>
    <input
      type="number"
      value={_sellerDeposit}
      onChange={(e) => setSellerDeposit(e.target.valueAsNumber)}
    />
    <label>Buyer Deposit:</label>
    <input
      type="number"
      value={_buyerDeposit}
      onChange={(e) => setBuyerDeposit(e.target.valueAsNumber)}
    />

    {/* Add button or trigger to call writeAsync */}
    <button onClick={writeAsync}>Call writeAsync</button>
  </div>
  );
};
