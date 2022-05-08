import React from 'react';
import useInventoryItems from '../../../hooks/useInventoryItems';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [items,setItems]=useInventoryItems();
    return (
      <div>
          <h2 className="mt-5 text-success ">Inventory Items</h2>
           <div className="mt-5 mx-auto g-5 row row-cols-1 row-cols-md-3">
           {
               items.map(item=><InventoryItem key={item._id} item={item}></InventoryItem>).slice(0,6)
           }
       </div>
      </div>
    );
};

export default InventoryItems;