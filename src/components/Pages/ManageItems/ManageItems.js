import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router';




const ManageItems = () => {
    const {id} = useParams();
    const [mItems,setMItems]=useState({});
   // console.log(mItems)
    useEffect(()=>{
        fetch(` https://aqueous-tundra-23230.herokuapp.com/inventoryItems/${id}`)
        .then(res=>res.json())
        .then(data=>setMItems(data))
    }, []);



   return (
      <div>
          <h2 className="mt-5 text-success ">Manage Items :  </h2>
 <div className="w-50 mx-auto h-50">
                      
<CardGroup >
  <Card  style={{height:"780px"}} >
    <Card.Img className="h-50" variant="top" src={mItems.img} />
    <Card.Body>
      <Card.Title>Name: {mItems.name}</Card.Title>
   
         <div>
         <h5>Price: <span>{mItems.price}</span> </h5>
          <h5>Quantity: {mItems.quantity}</h5>
           <div><span className="fw-bold">Description:</span> {mItems.description}</div>
          <h5>Supplier_name: {mItems.supplier_name}</h5>
         </div>
         <div>
         <Button /* onClick={()=>navigateToInventoryItemDetail(_id)} */  className="bg-success text-white fw-bolder rounded px-4 py-2 border-0 mb-3 " >delivered</Button>
   <form  /* onSubmit={handleAddItems} */ >
   <input type="text" name="quantity" placeholder='quantity' required />
   
   <input className="bg-success text-white mb-4 fw-bolder rounded px-4 py-1 border-0" type="submit" value="ReStok" />
</form>
         </div>
    </Card.Body>
  </Card>
</CardGroup>
 </div>
      </div>
    );
};



export default ManageItems;