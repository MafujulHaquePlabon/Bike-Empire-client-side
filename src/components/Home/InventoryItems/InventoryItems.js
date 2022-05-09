import React from 'react';
import { useNavigate } from 'react-router';
import useInventoryItems from '../../../hooks/useInventoryItems';
import InventoryItem from '../InventoryItem/InventoryItem';


const InventoryItems = () => {
    const [items,setItems]=useInventoryItems();
    const navigate=useNavigate();
    const navigateManageInventories=()=>{
        navigate('/ManageInventories');
    }
    return (
      <div>
          <h2 className="mt-5 text-success ">Inventory Items</h2>
           <div className="mt-5 mx-auto g-5 row row-cols-1 row-cols-md-3">
           {
               items.map(item=><InventoryItem key={item._id} item={item}></InventoryItem>).slice(0,6)
           }
        
       </div>
       <button className='bg-success my-5 fw-bolder  py-2 px-3 text-white border-0 rounded' onClick={navigateManageInventories} type="submit" >ManageInventories</button>
      </div>
    );
};

export default InventoryItems;