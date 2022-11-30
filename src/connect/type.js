import { BigNumber } from "ethers"

export const AdditionalRecipient = {
    amount: BigNumber,
    recipient: string,
},

export const FulfillmentComponent = {
    orderIndex: number,
    itemIndex: number,
},

export const Fulfillment = {
    offerComponents: FulfillmentComponent[],
    considerationComponents: FulfillmentComponent[],
},

export const CriteriaResolver = {
    orderIndex: number,
    side: 0 | 1,
    index: number,
    identifier: BigNumber,
    criteriaProof: string[],
},

export const BasicOrderParameters = {
    considerationToken: string,
    considerationIdentifier: BigNumber,
    considerationAmount: BigNumber,
    offerer: string,
    zone: string,
    offerToken: string,
    offerIdentifier: BigNumber,
    offerAmount: BigNumber,
    basicOrderType: number,
    startTime: string | BigNumber | number,
    endTime: string | BigNumber | number,
    zoneHash: string,
    salt: string,
    offererConduitKey: string,
    fulfillerConduitKey: string,
    totalOriginalAdditionalRecipients: BigNumber,
    additionalRecipients: AdditionalRecipient[],
    signature: string,
},

export const OfferItem = {
    itemType: number,
    token: string,
    identifierOrCriteria: BigNumber,
    startAmount: BigNumber,
    endAmount: BigNumber,
},
export const ConsiderationItem = {
    itemType: number,
    token: string,
    identifierOrCriteria: BigNumber,
    startAmount: BigNumber,
    endAmount: BigNumber,
    recipient: string,
},

export const OrderParameters = {
    offerer: string,
    zone: string,
    offer: OfferItem[],
    consideration: ConsiderationItem[],
    orderType: number,
    startTime: string | BigNumber | number,
    endTime: string | BigNumber | number,
    zoneHash: string,
    salt: string,
    conduitKey: string,
    totalOriginalConsiderationItems: string | BigNumber | number,
},

export const OrderComponents = Omit <
    OrderParameters,
"totalOriginalConsiderationItems"
    > & {
    counter: BigNumber,
},

export const Order = {
    parameters: OrderParameters,
    signature: string,
},

export const AdvancedOrder = {
    parameters: OrderParameters,
    numerator: string | BigNumber | number,
    denominator: string | BigNumber | number,
    signature: string,
    extraData: string,
},
