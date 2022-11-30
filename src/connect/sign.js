import { ethers } from "ethers";
import { SEAPORT_ADDR, orderType, Opensea0rder } from "./constants";
const { ethereum } = window
const provider = new ethers.providers.Web3Provider(ethereum);
const offerer = provider.getSigner();


// Returns signature
export const signOrder = async () => {


    let orderString = JSON.stringify(Opensea0rder.parameters)
    let orderObject = await JSON.parse(`${orderString}`)
    console.log(orderObject)


    // Domain data is required but not Domain type
    const domainData = {
        name: "Seaport",
        version: '1.1',
        chainId: await ethereum.request({ method: 'eth_chainId' }),
        verifyingContract: SEAPORT_ADDR,
    }


    const signature = await offerer._signTypedData(
        domainData,
        orderType,
        orderObject
    )

    console.log(Opensea0rder.signature === signature)

    console.log(signature)
    return signature
}