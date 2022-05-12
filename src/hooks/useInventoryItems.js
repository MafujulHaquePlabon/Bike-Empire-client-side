import React, { useEffect, useState } from 'react';

const useInventoryItems = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch(` https://aqueous-tundra-23230.herokuapp.com/inventoryItems`)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[]);
    
    return [items,setItems];
};

export default useInventoryItems;

/*` https://aqueous-tundra-23230.herokuapp.com/inventoryItems` */
/* 'http://localhost:5000/inventoryItems' */