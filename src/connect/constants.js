
export const SEAPORT_ADDR = '0x00000000006c3852cbEf3e08E8dF289169EdE581'
export const MUSICCLUB_ADDR = '0x23774Ea0CA2469b569511C514dA5fEcDd64319fF'

const eip712DomainType = {
    EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
    ],
};
export const orderType = {
    OrderComponents: [
        { name: "offerer", type: "address" },
        { name: "zone", type: "address" },
        { name: "offer", type: "OfferItem[]" },
        { name: "consideration", type: "ConsiderationItem[]" },
        { name: "orderType", type: "uint8" },
        { name: "startTime", type: "uint256" },
        { name: "endTime", type: "uint256" },
        { name: "zoneHash", type: "bytes32" },
        { name: "salt", type: "uint256" },
        { name: "conduitKey", type: "bytes32" },
        { name: "counter", type: "uint256" },
    ],
    OfferItem: [
        { name: "itemType", type: "uint8" },
        { name: "token", type: "address" },
        { name: "identifierOrCriteria", type: "uint256" },
        { name: "startAmount", type: "uint256" },
        { name: "endAmount", type: "uint256" },
    ],
    ConsiderationItem: [
        { name: "itemType", type: "uint8" },
        { name: "token", type: "address" },
        { name: "identifierOrCriteria", type: "uint256" },
        { name: "startAmount", type: "uint256" },
        { name: "endAmount", type: "uint256" },
        { name: "recipient", type: "address" },
    ],
};



export const SEAPORT_INTERFACE = [
    'function name() external view returns (string contractName)',
    'function fulfillBasicOrder(struct BasicOrderParameters) external payable returns (bool fulfilled)',
    'function fulfillOrder(struct Order, bytes32 fulfillerConduitKey) external payable returns (bool fulfilled)'
]

export const MUSICCLUB_ABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_baseUri",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "ApprovalCallerNotOwnerNorApproved",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ApprovalQueryForNonexistentToken",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ApprovalToCurrentOwner",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ApproveToCaller",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "BalanceQueryForZeroAddress",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "MintToZeroAddress",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "MintZeroQuantity",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "OwnerQueryForNonexistentToken",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TransferCallerNotOwnerNorApproved",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TransferFromIncorrectOwner",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TransferToNonERC721ReceiverImplementer",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TransferToZeroAddress",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "URIQueryForNonexistentToken",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "ActivateSale",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAX_SUPPLY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "addressToFreeMinted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "baseUri",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "_signature",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "_nftIndex",
                "type": "uint256"
            }
        ],
        "name": "freeMint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_nftIndex",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isWhiteListSale",
                "type": "bool"
            }
        ],
        "name": "isClaimed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "mintFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "mintedAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_quantity",
                "type": "uint256"
            }
        ],
        "name": "publicMint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "saleIsActive",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "newBaseURI",
                "type": "string"
            }
        ],
        "name": "setbaseUri",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "_signature",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "_nftIndex",
                "type": "uint256"
            }
        ],
        "name": "whitelistMint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "whitelistMintFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
]

export const SeaportABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "conduitController",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "BadContractSignature",
        type: "error",
    },
    {
        inputs: [],
        name: "BadFraction",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "BadReturnValueFromERC20OnTransfer",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
        ],
        name: "BadSignatureV",
        type: "error",
    },
    {
        inputs: [],
        name: "ConsiderationCriteriaResolverOutOfRange",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "orderIndex",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "considerationIndex",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "shortfallAmount",
                type: "uint256",
            },
        ],
        name: "ConsiderationNotMet",
        type: "error",
    },
    {
        inputs: [],
        name: "CriteriaNotEnabledForItem",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "identifiers",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
        ],
        name: "ERC1155BatchTransferGenericFailure",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "EtherTransferGenericFailure",
        type: "error",
    },
    {
        inputs: [],
        name: "InexactFraction",
        type: "error",
    },
    {
        inputs: [],
        name: "InsufficientEtherSupplied",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidBasicOrderParameterEncoding",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "conduit",
                type: "address",
            },
        ],
        name: "InvalidCallToConduit",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidCanceller",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "conduitKey",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "conduit",
                type: "address",
            },
        ],
        name: "InvalidConduit",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidERC721TransferAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidFulfillmentComponentData",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "InvalidMsgValue",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidProof",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "orderHash",
                type: "bytes32",
            },
        ],
        name: "InvalidRestrictedOrder",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidSignature",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidSigner",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidTime",
        type: "error",
    },
    {
        inputs: [],
        name: "MismatchedFulfillmentOfferAndConsiderationComponents",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "enum Side",
                name: "side",
                type: "uint8",
            },
        ],
        name: "MissingFulfillmentComponentOnAggregation",
        type: "error",
    },
    {
        inputs: [],
        name: "MissingItemAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "MissingOriginalConsiderationItems",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "NoContract",
        type: "error",
    },
    {
        inputs: [],
        name: "NoReentrantCalls",
        type: "error",
    },
    {
        inputs: [],
        name: "NoSpecifiedOrdersAvailable",
        type: "error",
    },
    {
        inputs: [],
        name: "OfferAndConsiderationRequiredOnFulfillment",
        type: "error",
    },
    {
        inputs: [],
        name: "OfferCriteriaResolverOutOfRange",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "orderHash",
                type: "bytes32",
            },
        ],
        name: "OrderAlreadyFilled",
        type: "error",
    },
    {
        inputs: [],
        name: "OrderCriteriaResolverOutOfRange",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "orderHash",
                type: "bytes32",
            },
        ],
        name: "OrderIsCancelled",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "orderHash",
                type: "bytes32",
            },
        ],
        name: "OrderPartiallyFilled",
        type: "error",
    },
    {
        inputs: [],
        name: "PartialFillsNotEnabledForOrder",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "identifier",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "TokenTransferGenericFailure",
        type: "error",
    },
    {
        inputs: [],
        name: "UnresolvedConsiderationCriteria",
        type: "error",
    },
    {
        inputs: [],
        name: "UnresolvedOfferCriteria",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "newCounter",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "offerer",
                type: "address",
            },
        ],
        name: "CounterIncremented",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "orderHash",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "offerer",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "zone",
                type: "address",
            },
        ],
        name: "OrderCancelled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "orderHash",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "offerer",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "zone",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "enum ItemType",
                        name: "itemType",
                        type: "uint8",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "identifier",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct SpentItem[]",
                name: "offer",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "enum ItemType",
                        name: "itemType",
                        type: "uint8",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "identifier",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address payable",
                        name: "recipient",
                        type: "address",
                    },
                ],
                indexed: false,
                internalType: "struct ReceivedItem[]",
                name: "consideration",
                type: "tuple[]",
            },
        ],
        name: "OrderFulfilled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "orderHash",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "offerer",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "zone",
                type: "address",
            },
        ],
        name: "OrderValidated",
        type: "event",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "offerer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "zone",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "enum ItemType",
                                name: "itemType",
                                type: "uint8",
                            },
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "identifierOrCriteria",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "startAmount",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endAmount",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct OfferItem[]",
                        name: "offer",
                        type: "tuple[]",
                    },
                    {
                        components: [
                            {
                                internalType: "enum ItemType",
                                name: "itemType",
                                type: "uint8",
                            },
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "identifierOrCriteria",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "startAmount",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endAmount",
                                type: "uint256",
                            },
                            {
                                internalType: "address payable",
                                name: "recipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct ConsiderationItem[]",
                        name: "consideration",
                        type: "tuple[]",
                    },
                    {
                        internalType: "enum OrderType",
                        name: "orderType",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256",
                        name: "startTime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "endTime",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "zoneHash",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "salt",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "conduitKey",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "counter",
                        type: "uint256",
                    },
                ],
                internalType: "struct OrderComponents[]",
                name: "orders",
                type: "tuple[]",
            },
        ],
        name: "cancel",
        outputs: [
            {
                internalType: "bool",
                name: "cancelled",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "offerer",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "zone",
                                type: "address",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                ],
                                internalType: "struct OfferItem[]",
                                name: "offer",
                                type: "tuple[]",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "address payable",
                                        name: "recipient",
                                        type: "address",
                                    },
                                ],
                                internalType: "struct ConsiderationItem[]",
                                name: "consideration",
                                type: "tuple[]",
                            },
                            {
                                internalType: "enum OrderType",
                                name: "orderType",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256",
                                name: "startTime",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endTime",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "zoneHash",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "conduitKey",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "totalOriginalConsiderationItems",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct OrderParameters",
                        name: "parameters",
                        type: "tuple",
                    },
                    {
                        internalType: "uint120",
                        name: "numerator",
                        type: "uint120",
                    },
                    {
                        internalType: "uint120",
                        name: "denominator",
                        type: "uint120",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "extraData",
                        type: "bytes",
                    },
                ],
                internalType: "struct AdvancedOrder",
                name: "advancedOrder",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "orderIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "enum Side",
                        name: "side",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256",
                        name: "index",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "identifier",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "criteriaProof",
                        type: "bytes32[]",
                    },
                ],
                internalType: "struct CriteriaResolver[]",
                name: "criteriaResolvers",
                type: "tuple[]",
            },
            {
                internalType: "bytes32",
                name: "fulfillerConduitKey",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "fulfillAdvancedOrder",
        outputs: [
            {
                internalType: "bool",
                name: "fulfilled",
                type: "bool",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "offerer",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "zone",
                                type: "address",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                ],
                                internalType: "struct OfferItem[]",
                                name: "offer",
                                type: "tuple[]",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "address payable",
                                        name: "recipient",
                                        type: "address",
                                    },
                                ],
                                internalType: "struct ConsiderationItem[]",
                                name: "consideration",
                                type: "tuple[]",
                            },
                            {
                                internalType: "enum OrderType",
                                name: "orderType",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256",
                                name: "startTime",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endTime",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "zoneHash",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "conduitKey",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "totalOriginalConsiderationItems",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct OrderParameters",
                        name: "parameters",
                        type: "tuple",
                    },
                    {
                        internalType: "uint120",
                        name: "numerator",
                        type: "uint120",
                    },
                    {
                        internalType: "uint120",
                        name: "denominator",
                        type: "uint120",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "extraData",
                        type: "bytes",
                    },
                ],
                internalType: "struct AdvancedOrder[]",
                name: "advancedOrders",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "orderIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "enum Side",
                        name: "side",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256",
                        name: "index",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "identifier",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "criteriaProof",
                        type: "bytes32[]",
                    },
                ],
                internalType: "struct CriteriaResolver[]",
                name: "criteriaResolvers",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "orderIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "itemIndex",
                        type: "uint256",
                    },
                ],
                internalType: "struct FulfillmentComponent[][]",
                name: "offerFulfillments",
                type: "tuple[][]",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "orderIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "itemIndex",
                        type: "uint256",
                    },
                ],
                internalType: "struct FulfillmentComponent[][]",
                name: "considerationFulfillments",
                type: "tuple[][]",
            },
            {
                internalType: "bytes32",
                name: "fulfillerConduitKey",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "maximumFulfilled",
                type: "uint256",
            },
        ],
        name: "fulfillAvailableAdvancedOrders",
        outputs: [
            {
                internalType: "bool[]",
                name: "availableOrders",
                type: "bool[]",
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "enum ItemType",
                                name: "itemType",
                                type: "uint8",
                            },
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "identifier",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                            {
                                internalType: "address payable",
                                name: "recipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct ReceivedItem",
                        name: "item",
                        type: "tuple",
                    },
                    {
                        internalType: "address",
                        name: "offerer",
                        type: "address",
                    },
                    {
                        internalType: "bytes32",
                        name: "conduitKey",
                        type: "bytes32",
                    },
                ],
                internalType: "struct Execution[]",
                name: "executions",
                type: "tuple[]",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "offerer",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "zone",
                                type: "address",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                ],
                                internalType: "struct OfferItem[]",
                                name: "offer",
                                type: "tuple[]",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "address payable",
                                        name: "recipient",
                                        type: "address",
                                    },
                                ],
                                internalType: "struct ConsiderationItem[]",
                                name: "consideration",
                                type: "tuple[]",
                            },
                            {
                                internalType: "enum OrderType",
                                name: "orderType",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256",
                                name: "startTime",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endTime",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "zoneHash",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "conduitKey",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "totalOriginalConsiderationItems",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct OrderParameters",
                        name: "parameters",
                        type: "tuple",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct Order[]",
                name: "orders",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "orderIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "itemIndex",
                        type: "uint256",
                    },
                ],
                internalType: "struct FulfillmentComponent[][]",
                name: "offerFulfillments",
                type: "tuple[][]",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "orderIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "itemIndex",
                        type: "uint256",
                    },
                ],
                internalType: "struct FulfillmentComponent[][]",
                name: "considerationFulfillments",
                type: "tuple[][]",
            },
            {
                internalType: "bytes32",
                name: "fulfillerConduitKey",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "maximumFulfilled",
                type: "uint256",
            },
        ],
        name: "fulfillAvailableOrders",
        outputs: [
            {
                internalType: "bool[]",
                name: "availableOrders",
                type: "bool[]",
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "enum ItemType",
                                name: "itemType",
                                type: "uint8",
                            },
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "identifier",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                            {
                                internalType: "address payable",
                                name: "recipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct ReceivedItem",
                        name: "item",
                        type: "tuple",
                    },
                    {
                        internalType: "address",
                        name: "offerer",
                        type: "address",
                    },
                    {
                        internalType: "bytes32",
                        name: "conduitKey",
                        type: "bytes32",
                    },
                ],
                internalType: "struct Execution[]",
                name: "executions",
                type: "tuple[]",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "considerationToken",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "considerationIdentifier",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "considerationAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "address payable",
                        name: "offerer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "zone",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "offerToken",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "offerIdentifier",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "offerAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "enum BasicOrderType",
                        name: "basicOrderType",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256",
                        name: "startTime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "endTime",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "zoneHash",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "salt",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "offererConduitKey",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes32",
                        name: "fulfillerConduitKey",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "totalOriginalAdditionalRecipients",
                        type: "uint256",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                            {
                                internalType: "address payable",
                                name: "recipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct AdditionalRecipient[]",
                        name: "additionalRecipients",
                        type: "tuple[]",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct BasicOrderParameters",
                name: "parameters",
                type: "tuple",
            },
        ],
        name: "fulfillBasicOrder",
        outputs: [
            {
                internalType: "bool",
                name: "fulfilled",
                type: "bool",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "offerer",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "zone",
                                type: "address",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                ],
                                internalType: "struct OfferItem[]",
                                name: "offer",
                                type: "tuple[]",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "address payable",
                                        name: "recipient",
                                        type: "address",
                                    },
                                ],
                                internalType: "struct ConsiderationItem[]",
                                name: "consideration",
                                type: "tuple[]",
                            },
                            {
                                internalType: "enum OrderType",
                                name: "orderType",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256",
                                name: "startTime",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endTime",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "zoneHash",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "conduitKey",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "totalOriginalConsiderationItems",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct OrderParameters",
                        name: "parameters",
                        type: "tuple",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct Order",
                name: "order",
                type: "tuple",
            },
            {
                internalType: "bytes32",
                name: "fulfillerConduitKey",
                type: "bytes32",
            },
        ],
        name: "fulfillOrder",
        outputs: [
            {
                internalType: "bool",
                name: "fulfilled",
                type: "bool",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "offerer",
                type: "address",
            },
        ],
        name: "getCounter",
        outputs: [
            {
                internalType: "uint256",
                name: "counter",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "offerer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "zone",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "enum ItemType",
                                name: "itemType",
                                type: "uint8",
                            },
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "identifierOrCriteria",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "startAmount",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endAmount",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct OfferItem[]",
                        name: "offer",
                        type: "tuple[]",
                    },
                    {
                        components: [
                            {
                                internalType: "enum ItemType",
                                name: "itemType",
                                type: "uint8",
                            },
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "identifierOrCriteria",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "startAmount",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endAmount",
                                type: "uint256",
                            },
                            {
                                internalType: "address payable",
                                name: "recipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct ConsiderationItem[]",
                        name: "consideration",
                        type: "tuple[]",
                    },
                    {
                        internalType: "enum OrderType",
                        name: "orderType",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256",
                        name: "startTime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "endTime",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "zoneHash",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "salt",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "conduitKey",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "counter",
                        type: "uint256",
                    },
                ],
                internalType: "struct OrderComponents",
                name: "order",
                type: "tuple",
            },
        ],
        name: "getOrderHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "orderHash",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "orderHash",
                type: "bytes32",
            },
        ],
        name: "getOrderStatus",
        outputs: [
            {
                internalType: "bool",
                name: "isValidated",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "isCancelled",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "totalFilled",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "totalSize",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "incrementCounter",
        outputs: [
            {
                internalType: "uint256",
                name: "newCounter",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "information",
        outputs: [
            {
                internalType: "string",
                name: "version",
                type: "string",
            },
            {
                internalType: "bytes32",
                name: "domainSeparator",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "conduitController",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "offerer",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "zone",
                                type: "address",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                ],
                                internalType: "struct OfferItem[]",
                                name: "offer",
                                type: "tuple[]",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "address payable",
                                        name: "recipient",
                                        type: "address",
                                    },
                                ],
                                internalType: "struct ConsiderationItem[]",
                                name: "consideration",
                                type: "tuple[]",
                            },
                            {
                                internalType: "enum OrderType",
                                name: "orderType",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256",
                                name: "startTime",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endTime",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "zoneHash",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "conduitKey",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "totalOriginalConsiderationItems",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct OrderParameters",
                        name: "parameters",
                        type: "tuple",
                    },
                    {
                        internalType: "uint120",
                        name: "numerator",
                        type: "uint120",
                    },
                    {
                        internalType: "uint120",
                        name: "denominator",
                        type: "uint120",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "extraData",
                        type: "bytes",
                    },
                ],
                internalType: "struct AdvancedOrder[]",
                name: "advancedOrders",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "orderIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "enum Side",
                        name: "side",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256",
                        name: "index",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "identifier",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "criteriaProof",
                        type: "bytes32[]",
                    },
                ],
                internalType: "struct CriteriaResolver[]",
                name: "criteriaResolvers",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "orderIndex",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "itemIndex",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct FulfillmentComponent[]",
                        name: "offerComponents",
                        type: "tuple[]",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "orderIndex",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "itemIndex",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct FulfillmentComponent[]",
                        name: "considerationComponents",
                        type: "tuple[]",
                    },
                ],
                internalType: "struct Fulfillment[]",
                name: "fulfillments",
                type: "tuple[]",
            },
        ],
        name: "matchAdvancedOrders",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "enum ItemType",
                                name: "itemType",
                                type: "uint8",
                            },
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "identifier",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                            {
                                internalType: "address payable",
                                name: "recipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct ReceivedItem",
                        name: "item",
                        type: "tuple",
                    },
                    {
                        internalType: "address",
                        name: "offerer",
                        type: "address",
                    },
                    {
                        internalType: "bytes32",
                        name: "conduitKey",
                        type: "bytes32",
                    },
                ],
                internalType: "struct Execution[]",
                name: "executions",
                type: "tuple[]",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "offerer",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "zone",
                                type: "address",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                ],
                                internalType: "struct OfferItem[]",
                                name: "offer",
                                type: "tuple[]",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "address payable",
                                        name: "recipient",
                                        type: "address",
                                    },
                                ],
                                internalType: "struct ConsiderationItem[]",
                                name: "consideration",
                                type: "tuple[]",
                            },
                            {
                                internalType: "enum OrderType",
                                name: "orderType",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256",
                                name: "startTime",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endTime",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "zoneHash",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "conduitKey",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "totalOriginalConsiderationItems",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct OrderParameters",
                        name: "parameters",
                        type: "tuple",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct Order[]",
                name: "orders",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "orderIndex",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "itemIndex",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct FulfillmentComponent[]",
                        name: "offerComponents",
                        type: "tuple[]",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "orderIndex",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "itemIndex",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct FulfillmentComponent[]",
                        name: "considerationComponents",
                        type: "tuple[]",
                    },
                ],
                internalType: "struct Fulfillment[]",
                name: "fulfillments",
                type: "tuple[]",
            },
        ],
        name: "matchOrders",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "enum ItemType",
                                name: "itemType",
                                type: "uint8",
                            },
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "identifier",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                            {
                                internalType: "address payable",
                                name: "recipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct ReceivedItem",
                        name: "item",
                        type: "tuple",
                    },
                    {
                        internalType: "address",
                        name: "offerer",
                        type: "address",
                    },
                    {
                        internalType: "bytes32",
                        name: "conduitKey",
                        type: "bytes32",
                    },
                ],
                internalType: "struct Execution[]",
                name: "executions",
                type: "tuple[]",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "contractName",
                type: "string",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "offerer",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "zone",
                                type: "address",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                ],
                                internalType: "struct OfferItem[]",
                                name: "offer",
                                type: "tuple[]",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "address payable",
                                        name: "recipient",
                                        type: "address",
                                    },
                                ],
                                internalType: "struct ConsiderationItem[]",
                                name: "consideration",
                                type: "tuple[]",
                            },
                            {
                                internalType: "enum OrderType",
                                name: "orderType",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256",
                                name: "startTime",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endTime",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "zoneHash",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "conduitKey",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "totalOriginalConsiderationItems",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct OrderParameters",
                        name: "parameters",
                        type: "tuple",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct Order[]",
                name: "orders",
                type: "tuple[]",
            },
        ],
        name: "validate",
        outputs: [
            {
                internalType: "bool",
                name: "validated",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];

export const Opensea0rder = {
    "parameters": {
        "offerer": "0xdd305dcf8c019b2e89ccecfedd80093726f611ef",
        "offer": [
            {
                "itemType": 2,
                "token": "0xf8A1B1a32970160c7ea8Db4d137D0034605221aB",
                "identifierOrCriteria": "998",
                "startAmount": "1",
                "endAmount": "1"
            }
        ],
        "consideration": [
            {
                "itemType": 0,
                "token": "0x0000000000000000000000000000000000000000",
                "identifierOrCriteria": "0",
                "startAmount": "9750000000000000",
                "endAmount": "9750000000000000",
                "recipient": "0xdd305DCf8C019B2E89cCEcfeDD80093726F611EF"
            },
            {
                "itemType": 0,
                "token": "0x0000000000000000000000000000000000000000",
                "identifierOrCriteria": "0",
                "startAmount": "250000000000000",
                "endAmount": "250000000000000",
                "recipient": "0x0000a26b00c1F0DF003000390027140000fAa719"
            }
        ],
        "startTime": "1669577259",
        "endTime": "1672169259",
        "orderType": 0,
        "zone": "0x0000000000000000000000000000000000000000",
        "zoneHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "salt": "0x360c6ebe00000000000000000000000000000000000000004075210e08d00870",
        "conduitKey": "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
        "totalOriginalConsiderationItems": 2,
        "counter": 0
    },
    "signature": "0xe9f177433c942ec41a36922663ef16d89f222c5caacb80f05bacc054ddb33fd512c45c88bf2b2482dcdb91d35be277b4be2fd70f5ae036ae2faffde28189bac41c"
}

export const basicOrder = {
    considerationToken: '0x0000000000000000000000000000000000000000',
    considerationIdentifier: '0',
    considerationAmount: "975000000000000000",

    offerer: "0xdd305DCf8C019B2E89cCEcfeDD80093726F611EF",
    offerToken: '0x23774Ea0CA2469b569511C514dA5fEcDd64319fF',
    offerIdentifier: '1',
    offerAmount: '1',

    basicOrderType: '0',
    startTime: '1669362764',
    endTime: '1669967564',
    zone: "0x0000000000000000000000000000000000000000",
    zoneHash: '0x3000000000000000000000000000000000000000000000000000000000000000',
    salt: '23504329581344010134838326502337599742689425785717070105048109825617444322231',

    offererConduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
    fulfillerConduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
    totalOriginalAdditionalRecipients: '1',
    additionalRecipients: [["25000000000000000", "0x0000a26b00c1F0DF003000390027140000fAa719"]],
    signature: "0xe3196e873ccfc5802b4373d2528dd11c152a84c563f2bb4153461f6d287fe4575dca249a93cf9fe24140af44ca1ff5c7a6f36d3dbd2fc02b09a000b8011e71f5"

}


export const localOrder = {
    "parameters": {
        "offerer": "0x98A6EeF34b345531926737E20B150781c137E89c",
        "zone": "0x0000000000000000000000000000000000000000",
        "zoneHash": "0x3000000000000000000000000000000000000000000000000000000000000000",
        "startTime": "1669658734",
        "endTime": "1670263534",
        "orderType": 0,
        "offer": [
            {
                "itemType": "2",
                "token": "0x23774Ea0CA2469b569511C514dA5fEcDd64319fF",
                "identifierOrCriteria": "10",
                "startAmount": "1",
                "endAmount": "1"
            }
        ],
        "consideration": [
            {
                "itemType": 0,
                "token": "0x0000000000000000000000000000000000000000",
                "identifierOrCriteria": "0",
                "startAmount": "9750000000000000",
                "endAmount": "9750000000000000",
                "recipient": "0x98a6eef34b345531926737e20b150781c137e89c"
            },
            {
                "itemType": 0,
                "token": "0x0000000000000000000000000000000000000000",
                "identifierOrCriteria": "0",
                "startAmount": "250000000000000",
                "endAmount": "250000000000000",
                "recipient": "0x0000a26b00c1F0DF003000390027140000fAa719"
            }
        ],
        "totalOriginalConsiderationItems": 2,
        "salt": "52110304851740900096534514575893950918489918760508234934861551539346575285580",
        "conduitKey": "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
        "counter": 0
    },
    "signature": "0xb2f380d0cce4c25a6875384c69b932d74c5e57c6b5cb97825e0bdbe4bda5b41f278a488eae368639f81c3d00f93d359bed0fae55cafafe56147c23f9386ed925"
}

export const OpenseaAsset = {
    "order_hash": "0x6fbc3b2f6225b52066c4d00165e1fbe38525832fd5fe58efa173282242a2c6c4",
    "protocol_data": {
        "parameters": {
            "offerer": "0xdd305dcf8c019b2e89ccecfedd80093726f611ef",
            "offer": [
                {
                    "itemType": 2,
                    "token": "0xf8A1B1a32970160c7ea8Db4d137D0034605221aB",
                    "identifierOrCriteria": "998",
                    "startAmount": "1",
                    "endAmount": "1"
                }
            ],
            "consideration": [
                {
                    "itemType": 0,
                    "token": "0x0000000000000000000000000000000000000000",
                    "identifierOrCriteria": "0",
                    "startAmount": "9750000000000000",
                    "endAmount": "9750000000000000",
                    "recipient": "0xdd305DCf8C019B2E89cCEcfeDD80093726F611EF"
                },
                {
                    "itemType": 0,
                    "token": "0x0000000000000000000000000000000000000000",
                    "identifierOrCriteria": "0",
                    "startAmount": "250000000000000",
                    "endAmount": "250000000000000",
                    "recipient": "0x0000a26b00c1F0DF003000390027140000fAa719"
                }
            ],
            "startTime": "1669577259",
            "endTime": "1672169259",
            "orderType": 0,
            "zone": "0x0000000000000000000000000000000000000000",
            "zoneHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "salt": "0x360c6ebe00000000000000000000000000000000000000004075210e08d00870",
            "conduitKey": "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
            "totalOriginalConsiderationItems": 2,
            "counter": 0
        },
        "signature": "0xe9f177433c942ec41a36922663ef16d89f222c5caacb80f05bacc054ddb33fd512c45c88bf2b2482dcdb91d35be277b4be2fd70f5ae036ae2faffde28189bac41c"
    }
}