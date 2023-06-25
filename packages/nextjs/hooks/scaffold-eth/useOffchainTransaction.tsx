import { useEffect } from "react";
import { Offchain, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";

const useOffchainTransaction = () => {
  useEffect(() => {
    const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26
    const EASVersion = "0.26"; // Specify the actual EAS version
    const CHAINID = 1234567890; // Specify the actual chain ID as a number
    const privateKey = "234t5hryngbfvfety6"; // Specify the actual private key

    // Initialize Offchain class with EAS configuration
    const EAS_CONFIG = {
      address: EASContractAddress,
      version: EASVersion,
      chainId: CHAINID,
    };

    const offchain = new Offchain(EAS_CONFIG, 1);

    // Initialize SchemaEncoder with the schema string
    const schemaEncoder = new SchemaEncoder("uint256 eventId, uint8 voteIndex");
    const encodedData = schemaEncoder.encodeData([
      { name: "eventId", value: 1, type: "uint256" },
      { name: "voteIndex", value: 1, type: "uint8" },
    ]);

    // Signer is an ethers.js Signer instance
    const provider = ethers.getDefaultProvider("YOUR_PROVIDER"); // Specify the actual provider
    const wallet = new ethers.Wallet(privateKey, provider);
    const signer = wallet.connect(provider);

    const signOffchainAttestation = async () => {
      const offchainAttestation = await offchain.signOffchainAttestation(
        {
          version: 1, // Specify the version here
          recipient: "0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165",
          expirationTime: 0,
          time: 1671219636,
          revocable: true,
          nonce: 0,
          schema: "0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995",
          refUID: "0x0000000000000000000000000000000000000000000000000000000000000000",
          data: encodedData,
        },
        signer,
      );

      console.log(offchainAttestation);
    };

    signOffchainAttestation();
  }, []);

  // You can return any additional data or functions that you need in your component
};

export default useOffchainTransaction;
