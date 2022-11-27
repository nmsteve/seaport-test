
import { useState } from 'react';
import { createOrder, approval, fulfillOrder, getName } from "./connect/seaport"


function App() {

  const [name, setName] = useState('')
  const [signature, setSign] = useState('')


  const displayName = async () => {
    setName('')
    //setName(await getName())

  }

  const getApproval = async () => {
    //await approval()
    //await ownerAssets()
    await getName()

  }

  const displaySign = async () => {
    setSign('')
    let orderNsign = await createOrder()
    setSign(orderNsign.signature)

  }


  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center bg-success'>
        <h1>seaport Interactions</h1>
      </div>
      <div className='d-flex align-items-center mt-3'>
        <button className='btn bg-success rounded-2 py-0 w-md  d-none d-md-inline'
          onClick={getApproval}>approve</button>
        <p className='ms-2'>{name}</p>
      </div>
      <div className='d-flex align-items-center mt-3'>
        <button className='btn bg-success  rounded-2 py-0 w-md  d-none d-md-inline'
          onClick={displaySign}>Create Order</button>
        <p className='ms-2'>{signature}</p>
      </div>

      <div className='d-flex align-items-center mt-3'>
        <button className='btn bg-success  rounded-2 py-0 w-md  d-none d-md-inline'
          onClick={fulfillOrder}>fulfill Order</button>
        <p className='ms-2'></p>
      </div>

    </div>



  );
}

export default App;
