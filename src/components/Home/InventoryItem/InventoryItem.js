import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';


const InventoryItem = (props) => {
    const {_id,name, img,description, price, quantity, supplier_name}=props.item ;
    const navigateToInventoryItemDetail=id=>{
      //  navigate(`\inventoryItem\${id}`);
    }
    console.log(name)
    return (
        <div>
          {/*  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    <Button onClick={()=>navigateToInventoryItemDetail(_id)} className="bg-success" > stock update</Button>
  </Card.Body>
</Card>  */}

<CardGroup>
  <Card style={{height:"780px"}} >
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>Name: {name}</Card.Title>
      <Card.Text>
          <h5>Price: <span>{price}</span> </h5>
          <h5  >Quantity: {quantity}</h5>
           <p><span className="fw-bold">Description:</span> {description}</p>
          <h5>Supplier_name: {supplier_name}</h5>
      </Card.Text>
      <Button onClick={()=>navigateToInventoryItemDetail(_id)} className="bg-success text-white fw-bolder rounded px-4 py-2 border-0 " > Stock Update</Button>
    </Card.Body>
   
  
   
  </Card>
</CardGroup>
        </div>
    );
};

export default InventoryItem;