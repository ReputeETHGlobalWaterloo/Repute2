import { useState } from "react";
import { CopyIcon } from "./assets/CopyIcon";
import { DiamondIcon } from "./assets/DiamondIcon";
import { HareIcon } from "./assets/HareIcon";
import { ArrowSmallRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { BigNumber } from "ethers";

export const ContractInteraction = () => {
  const [_userAddress, setUserAddress] = useState("");
  const [_root, setRoot] = useState(0);
  const [_nullifierHash, setNullifierHash] = useState(0);
  const [_proof, setProof] = useState();
  
  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "OTCV2",
    functionName: "verify",
    args: [
      _userAddress,
      BigNumber.from(_root),
      BigNumber.from(_nullifierHash),
      _proof
    ]
    });

  return (
    <div>
      {/* Add input components for the variables */}
      <input
        type="text"
        value={_userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
      />
      <input
        type="text"
        value={_root}
        onChange={(e) => setRoot(e.target.valueAsNumber)}
      />
      <input
        type="text"
        value={_nullifierHash}
        onChange={(e) => setNullifierHash(e.target.valueAsNumber)}
      />
      <input
        type="text"
        value={_proof}
        onChange={(e) => setProof(e.target.value)}
      />

      {/* Add button or trigger to call writeAsync */}
      <button onClick={writeAsync}>Call writeAsync</button>
    </div>
  );
};
