const localhostContractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const localhostContractAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Exchange_CanNotReleaseFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "Exchange_NotEnoughFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "Exchange_NotProvider",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_txtId",
        type: "string",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDecimal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getProvider",
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
        internalType: "string",
        name: "_txtId",
        type: "string",
      },
    ],
    name: "getStatus",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_txtId",
        type: "string",
      },
    ],
    name: "releaseFund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_txtId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "sell",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const sepoliaContractAddress = "0xd3F8e07aBECEFE03Abe53E7996390B2944f1C8F7";
const sepoliaContractAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Exchange_CanNotReleaseFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "Exchange_NotEnoughFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "Exchange_NotProvider",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_txtId",
        type: "string",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDecimal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getProvider",
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
        internalType: "string",
        name: "_txtId",
        type: "string",
      },
    ],
    name: "getStatus",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_txtId",
        type: "string",
      },
    ],
    name: "releaseFund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_txtId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "sell",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export {
  localhostContractAbi,
  localhostContractAddress,
  sepoliaContractAbi,
  sepoliaContractAddress,
};
