import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';


const InventoryItem = (props) => {
    //const {id}=useParams();
    const {_id,name, img,description, price, quantity, supplier_name}=props.item ;
    const navigate=useNavigate();
     const navigateToInventoryItemDetail=id=>{
      //  console.log(_id)
        navigate(`/inventoryItems/${id}`);
    } 
    
    return (
       
<CardGroup>
  <Card style={{height:"780px"}} >
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>Name: {name}</Card.Title>
   
         <div>
         <h5>Price: {price} BDT </h5>
          <h5>Quantity: {quantity}</h5>
           <div><span className="fw-bold">Description:</span> {description}</div>
          <h5>Supplier_name: {supplier_name}</h5>
         </div>
    
      <Button   onClick={()=>navigateToInventoryItemDetail(_id)}  className="bg-success text-white fw-bolder rounded px-4 py-2 border-0 " > Stock Update</Button>
    </Card.Body>
  </Card>
</CardGroup>
       
    );
};

export default InventoryItem;