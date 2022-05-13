import React from 'react';
import { Table } from 'react-bootstrap';
import useManageInventories from '../../../hooks/useManageInventories';
import AddItem from './AddItem';

const AddItems = () => {
    const [mInvItems,setMInvItems]=useManageInventories(); 
    const handleAddInventoryItem = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier_name = event.target.supplier_name.value;
        const description = event.target.description.value;
      
    
        const inventoryItems = {name,img,price,quantity,supplier_name,description};

        // send data to the server
        fetch('http://localhost:5000/ManageInventories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inventoryItems)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('InventoryItems added successfully!!!');
            event.target.reset();
        })
    }
    
    return (
        <div>
             <div>
         <div  className="mt-5" >
           <form  onSubmit={handleAddInventoryItem} >
                <input type="text" name="name" placeholder='Name' required />
               
                <input type="url" name="img" placeholder='Image' required />
                <input type="number" name="price" placeholder='Price' required />
                <input type="number" name="quantity" placeholder='Quantity' required />
                <input type="text" name="supplier_name" placeholder='Supplier_name' required />
                <input type="text" name="description" placeholder='Description' required />
                <br />
                <input className="bg-success mt-2 mb-3 fw-bolder  py-2 px-3 text-white border-0 rounded" type="submit" value="Add new item" />
            </form>
               <Table className="ms-auto"  striped bordered hover>
               <thead>
          <tr className="">
            <th className="ps-5" style={{width:100}}> Product Name</th>
            <th style={{width:100}}> Image</th>
            <th style={{width:100}}>Price</th>
            <th style={{width:100}}>Quantity</th>
            <th style={{width:100}}>Supplier_name</th>
            <th style={{width:100}}>Options</th>
          </tr>
        </thead>
       
               </Table>
           {
               mInvItems.map(mInvItem=> <AddItem key={mInvItem._id} mInvItem={mInvItem}></AddItem> )
           }
       </div>
       
      </div>
        </div>
    );
};

export default AddItems;