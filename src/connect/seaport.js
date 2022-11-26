
import { Seaport } from "@opensea/seaport-js";
import { ethers } from "ethers";
//import { SeaportSDK } from 'seaport-js'


import { MUSICCLUB_ABI, order, SeaportABI, basicOrder } from './abi'
const gpc = require('generate-pincode')




const SEAPORT_ADDR = '0x00000000006c3852cbEf3e08E8dF289169EdE581'
const MUSICCLUB_ADDR = '0x23774Ea0CA2469b569511C514dA5fEcDd64319fF'

const provider = new ethers.providers.Web3Provider(window.ethereum);
const offerer = provider.getSigner();
const fulfiller = provider.getSigner();


const seaportMain = new ethers.Contract(SEAPORT_ADDR, SeaportABI, provider)
const seaport = new Seaport(provider);
const { ethereum } = window



export const getName = async () => {
    let name = await seaportMain.name()
    console.log(name)
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
                        token: "0x23774Ea0CA2469b569511C514dA5fEcDd64319fF",
                        identifier: "1",
                    },
                ],
                consideration: [
                    {
                        amount: ethers.utils.parseEther("0.975").toString(),
                        recipient: ethereum.selectedAddress.toString(),
                    },
                    {
                        amount: ethers.utils.parseEther("0.025").toString(),
                        recipient: '0x0000a26b00c1F0DF003000390027140000fAa719',
                    },
                ],

                conduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
                salt: gpc(77),
                startTime: (Date.now() / 1000).toFixed(),
                endTime: (Date.now() / 1000 + 3600 * 24 * 7).toFixed()
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

    console.log(await fulfiller.getAddress())

    try {

        const seaportMain = new ethers.Contract(SEAPORT_ADDR, SeaportABI, fulfiller)
        let orderString = await JSON.stringify(order.parameters)
        let orderObject = await JSON.parse(`${orderString}`)
        console.log(orderObject)

        // let actions = await seaport.fulfillOrder({
        //     order: orderObject,
        //     accountAddress: fulfiller._address,
        // });

        // await getTransactionMethods(
        //     seaportMain,
        //     "fulfillOrder",
        //     [order.parameters, order.parameters.conduitKey, { value: ethers.utils.parseEther('0.2') }],
        //     'domain'
        // )

        //console.log(actions)



        //let fulfillOrder = await seaportMain.fulfillOrder(orderObject, orderObject.conduitKey, { value: ethers.utils.parseEther('0.2') })
        let fulfillBasic = await seaportMain.populateTransaction.fulfillOrder(orderObject, orderObject.conduitKey, { value: ethers.utils.parseEther('0.2') })
        //const tx = await fulfillOrder.await()
        //console.log(fulfillBasic)

    } catch (error) {
        console.error(error)

    }

}



