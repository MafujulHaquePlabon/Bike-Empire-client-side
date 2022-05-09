import React from 'react';
import useManageItem from '../../../hooks/useManageItem';
import ManageItem from './ManageItem';

const ManageItems = () => {
   
    const [items,setItems]=useManageItem();
    
    return (
      <div>
          <h2 className="mt-5 text-success ">Manage Items</h2>
            <div className="mt-5 mx-auto g-5 row row-cols-1 row-cols-md-3">
           {
               items.map(item=>
                <ManageItem key={item._id} item={item}></ManageItem>).slice(0,6)
               
           }
        
       </div> 
      
      </div>
    );
};


export default ManageItems;