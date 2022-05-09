import React, { useEffect, useState } from 'react';

const useManageInventories = () => {
    const [mInvItems,setMInvItems]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/ManageInventories')
        .then(res=>res.json())
        .then(data=>setMInvItems(data))
    },[]);
    
    return[mInvItems,setMInvItems];
};
export default useManageInventories;