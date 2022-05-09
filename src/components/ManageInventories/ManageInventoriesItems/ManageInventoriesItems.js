import React from 'react';
import { Table } from 'react-bootstrap';


const ManageInventoriesItems = (props) => {
     const {_id,name, img,description, price, quantity, supplier_name}=props.mInvItem ;
  

    return (
        <Table  striped bordered hover>
        
        <tbody>
          <tr>
            <td style={{width:100}} >{name}</td>
            <td style={{width:100}}><img style={{width:"60px"}} src={img} alt="" /></td>
            <td style={{width:100}}>{price}</td>
            <td style={{width:100}}>{quantity}</td>
            <td style={{width:100}}>{supplier_name}</td>
          <td style={{width:100}}><button className="bg-danger border-0 rounded text-white fw-bolder">Delete</button></td>
          </tr>
        </tbody>
      </Table>
    );
};

export default ManageInventoriesItems;