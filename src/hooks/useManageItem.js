import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const useManageItem = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch('https://aqueous-tundra-23230.herokuapp.com/inventoryItems')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[]);
    
    return [items,setItems];
};

export default useManageItem;