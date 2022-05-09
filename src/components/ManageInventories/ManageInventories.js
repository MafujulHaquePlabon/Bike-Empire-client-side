import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import useManageInventories from '../../hooks/useManageInventories';
import ManageInventoriesItems from './ManageInventoriesItems/ManageInventoriesItems';

const ManageInventories = () => {
    const [mInvItems,setMInvItems]=useManageInventories();
    const navigate=useNavigate();
    const navigateAddItem=()=>{
        navigate('/Add_Item');
    } 
    
    return (
        <div>
             <div>
          <h2 className="mt-5 text-success ">Manage Inventories</h2>
          
           <div  className="mt-5" >
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
               mInvItems.map(mInvItem=> <ManageInventoriesItems key={mInvItem._id} mInvItem={mInvItem}></ManageInventoriesItems> )
           }
       </div>
       <button className='bg-success my-5 fw-bolder  py-2 px-3 text-white border-0 rounded'  onClick={navigateAddItem}  type="submit" >Add new item</button>
      </div>
        </div>
    );
};

export default ManageInventories;