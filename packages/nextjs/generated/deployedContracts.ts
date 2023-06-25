const contracts = {
  80001: [
    {
      name: "polygonMumbai",
      chainId: "80001",
      contracts: {
        OTCV2: {
          address: "0xdcbc7A2a85e1d3715949CAB5a6BF8F4DEbc59f1f",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "dealId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newAttestor",
                  type: "address",
                },
              ],
              name: "AttestorSwapped",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "dealId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newExpiry",
                  type: "uint256",
                },
              ],
              name: "ExpiryExtended",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
              ],
              name: "IDUnverified",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
              ],
              name: "IDVerified",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "dealId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "dealType",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "opportunityName",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "seller",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sellerDeposit",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "expiryBlock",
                  type: "uint256",
                },
              ],
              name: "OfferPosted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "dealId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "buyer",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "buyerDeposit",
                  type: "uint256",
                },
              ],
              name: "OfferTaken",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "dealId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "seller",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "buyer",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sellerDeposit",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "buyerDeposit",
                  type: "uint256",
                },
              ],
              name: "Refunded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "dealId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "seller",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "buyer",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sellerDeposit",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "buyerDeposit",
                  type: "uint256",
                },
              ],
              name: "TradeSettled",
              type: "event",
            },
            {
              inputs: [],
              name: "admin",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "deals",
              outputs: [
                {
                  internalType: "string",
                  name: "dealType",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "opportunityName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "seller",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "buyer",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "attestor",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "sellerDeposit",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "buyerDeposit",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "status",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "expiryBlock",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_dealId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_newExpiry",
                  type: "uint256",
                },
              ],
              name: "extendExpiry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_dealType",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_opportunityName",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_expiryBlock",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_sellerDeposit",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_buyerDeposit",
                  type: "uint256",
                },
              ],
              name: "postOffer",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_dealId",
                  type: "uint256",
                },
              ],
              name: "refund",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_dealId",
                  type: "uint256",
                },
              ],
              name: "settleTrade",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_dealId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_newAttestor",
                  type: "address",
                },
              ],
              name: "swapAttestor",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_dealId",
                  type: "uint256",
                },
              ],
              name: "takeOffer",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "userAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "root",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "nullifierHash",
                  type: "uint256",
                },
                {
                  internalType: "uint256[8]",
                  name: "proof",
                  type: "uint256[8]",
                },
              ],
              name: "verify",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "worldIDVerified",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "worldIDVerify",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
