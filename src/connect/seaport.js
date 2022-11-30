
import { Seaport } from "@opensea/seaport-js";
import { ethers } from "ethers";
import { MUSICCLUB_ABI, SeaportABI, basicOrder, local0rder, SEAPORT_ADDR, MUSICCLUB_ADDR, Opensea0rder } from './constants'
const gpc = require('generate-pincode')

var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider)


const provider = new ethers.providers.Web3Provider(window.ethereum);
const offerer = provider.getSigner();
const fulfiller = provider.getSigner();


const seaportMain = new ethers.Contract(SEAPORT_ADDR, SeaportABI, provider)
const seaportWeb3 = new web3.eth.Contract(SeaportABI, SEAPORT_ADDR)

const seaport = new Seaport(provider);
const { ethereum } = window



export const getName = async () => {
    let name = await seaportMain.name()
    console.log(name)

    //web3
    const seaportWeb3 = new web3.eth.Contract(SeaportABI, SEAPORT_ADDR, { from: await fulfiller.getAddress() })
    let web3Name = await seaportWeb3.methods.name().call()
    console.log(web3Name)
    return name

}

export const approval = async () => {

    //connect if not connected
    await ethereum.request({ method: 'eth_requestAccounts' })

    const MusicClub = new ethers.Contract(MUSICCLUB_ADDR, MUSICCLUB_ABI, offerer)
    const approval = await MusicClub.setApprovalForAll(SEAPORT_ADDR, true)
    await approval.wait()

    console.log(approval)
    return approval

}

export const createOrder = async () => {

    await ethereum.request({ method: 'eth_requestAccounts' })
    console.log(ethereum.selectedAddress, await fulfiller.getAddress())

    try {

        const order = await seaport.createOrder(
            {
                offer: [
                    {
                        itemType: "2",
                        token: "0xf8A1B1a32970160c7ea8Db4d137D0034605221aB",
                        identifier: "998",
                    },
                ],
                consideration: [
                    {
                        amount: ethers.utils.parseEther("0.00975").toString(),
                        recipient: ethereum.selectedAddress.toString(),
                    },
                    {
                        amount: ethers.utils.parseEther("0.00025").toString(),
                        recipient: '0x0000a26b00c1F0DF003000390027140000fAa719',
                    },
                ],
                zone: "0x0000000000000000000000000000000000000000",
                zoneHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
                conduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
                salt: "0x360c6ebe00000000000000000000000000000000000000004075210e08d00870",//gpc(77),
                startTime: "1669577259", //(Date.now() / 1000).toFixed(),
                endTime: "1672169259"//(Date.now() / 1000 + 3600 * 24 * 7).toFixed()
            },


        );


        let executeAllActions = order.executeAllActions
        let ordernsign = await executeAllActions()
        console.log(ordernsign)
        return ordernsign


    } catch (error) {
        console.log(error)
    }


}

export const fulfillOrder = async () => {


    //connect if not connected
    await ethereum.request({ method: 'eth_requestAccounts' })
    const singerAddress = await fulfiller.getAddress()
    console.log()

    try {

        const seaportMain = new ethers.Contract(SEAPORT_ADDR, SeaportABI, fulfiller)
        let orderString = JSON.stringify(Opensea0rder)
        let orderObject = await JSON.parse(`${orderString}`)
        console.log(orderObject)

        // let actions = await seaport.fulfillOrder({
        //     order: orderObject,
        //     accountAddress: fulfiller._address,
        // });


        let fulfillOrder = await seaportWeb3.methods.fulfillBasicOrder(basicOrder).send({ from: await fulfiller.getAddress(), value: ethers.utils.parseEther('0.01') })
        //let fulfillOrder = await seaportMain.fulfillBasicOrder(basicOrder, { value: ethers.utils.parseEther('0.02') })
        //let fulfillBasic = await seaportMain.populateTransaction.fulfillOrder(orderObject, orderObject.conduitKey, { value: ethers.utils.parseEther('0.2') })
        //const tx = await fulfillOrder.await()
        //console.log(fulfillBasic)

    } catch (error) {
        console.error(error)

    }

}

export const fulfillBasicOrder = async () => {

    try {

        //  create basic order
        const basicOrder = {

            considerationToken: Opensea0rder.parameters.consideration[0].token,
            considerationIdentifier: Opensea0rder.parameters.consideration[0].identifierOrCriteria,
            considerationAmount: Opensea0rder.parameters.consideration[0].endAmount,

            offerer: Opensea0rder.parameters.offerer,
            offerToken: Opensea0rder.parameters.offer[0].token,
            offerIdentifier: Opensea0rder.parameters.offer[0].identifierOrCriteria,
            offerAmount: '1',

            basicOrderType: Opensea0rder.parameters.orderType,
            startTime: Opensea0rder.parameters.startTime,
            endTime: Opensea0rder.parameters.endTime,
            zone: Opensea0rder.parameters.zone,
            zoneHash: Opensea0rder.parameters.zoneHash,
            salt: Opensea0rder.parameters.salt,

            offererConduitKey: Opensea0rder.parameters.conduitKey,
            fulfillerConduitKey: Opensea0rder.parameters.conduitKey,
            totalOriginalAdditionalRecipients: 1,
            additionalRecipients: [
                [Opensea0rder.parameters.consideration[1].startAmount, Opensea0rder.parameters.consideration[1].recipient]
            ],
            signature: Opensea0rder.signature
        }

        console.log(basicOrder)
        console.log(Opensea0rder.parameters.consideration[0].startAmount)


        //connect if not connected
        await ethereum.request({ method: 'eth_requestAccounts' })
        const seaportMain = new ethers.Contract(SEAPORT_ADDR, SeaportABI, fulfiller)

        //let fulfillOrder = await seaportWeb3.methods.fulfillBasicOrder(basicOrder).send({ from: await fulfiller.getAddress(), value: ethers.utils.parseEther('0.01') })
        let fulfillOrder = await seaportMain.fulfillBasicOrder(basicOrder, { value: ethers.utils.parseEther('0.01') })

    } catch (error) {
        console.error(error)

    }

}



