import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const ManageItem = (props) => {
    const {_id,name, img,description, price, quantity, supplier_name}=props.item ;
   /*  const navigate=useNavigate();
    const navigateToInventoryItemDetail=id=>{
        console.log(_id)
        navigate(`/Manage_Items/${_id}`);
    }
    */
    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
      
        const updatedUser = {name};
        event.target.reset();
        alert('Quantity added successfully!!!',updatedUser);
       
    }
    return (
       
<CardGroup>
  <Card style={{height:"880px"}} >
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>Name: {name}</Card.Title>
   
         <div>
         <h5>Price: <span>{price}</span> </h5>
          <h5>Quantity: {quantity}</h5>
           <div><span className="fw-bold">Description:</span> {description}</div>
          <h5>Supplier_name: {supplier_name}</h5>
         </div>
    
      <Button /* onClick={()=>navigateToInventoryItemDetail(_id)} */ className="bg-success text-white fw-bolder rounded px-4 py-2 border-0 mb-3 " >delivered</Button>
      <form onSubmit={handleUpdateUser}>
                <input type="text" name="quantity" placeholder='quantity' required />
                
                <input className="bg-success text-white mb-4 fw-bolder rounded px-4 py-1 border-0" type="submit" value="ReStok" />
            </form>
    </Card.Body>
  </Card>
</CardGroup>
       
    );
};

export default ManageItem;