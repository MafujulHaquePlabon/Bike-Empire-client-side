import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const ManageInventoriesItems = (props) => {
     const {_id,name, img,description, price, quantity, supplier_name}=props.mInvItem ;
     const [ManageInventories, setManageInventories] = useState([]);
    
useEffect( () =>{
    fetch('http://localhost:5000/ManageInventories')
    .then(res => res.json())
    .then(data => setManageInventories(data));
}, []);
     const handleInventoryItemDelete=id=>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id, ', id);
            const url = `https://aqueous-tundra-23230.herokuapp.com/ManageInventories/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = ManageInventories.filter(ManageInventorie => ManageInventorie._id !== id);
                    setManageInventories(remaining);
                 }
                }
            )
        }
      }
    
  

    return (
        <Table  striped bordered hover>
        
        <tbody>
          <tr>
            <td style={{width:100}} >{name}</td>
            <td style={{width:100}}><img style={{width:"60px"}} src={img} alt="" /></td>
            <td style={{width:100}}>{price}</td>
            <td style={{width:100}}>{quantity}</td>
            <td style={{width:100}}>{supplier_name}</td>
          <td style={{width:100}}><button onClick={()=>handleInventoryItemDelete(_id)} className="bg-danger border-0 rounded text-white fw-bolder">Delete <svg style={{width:25}} xmlns="http://www.w3.org/2000/svg" className="h-6 bg-danger w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg> </button></td>
          </tr>
        </tbody>
      </Table>
    );
};

export default ManageInventoriesItems;