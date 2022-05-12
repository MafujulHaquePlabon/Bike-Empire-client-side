import React, { useEffect, useState } from 'react';

const useManageInventories = () => {
    const [mInvItems,setMInvItems]=useState([]);
    useEffect(()=>{
        fetch(' https://aqueous-tundra-23230.herokuapp.com/ManageInventories')
        .then(res=>res.json())
        .then(data=>setMInvItems(data))
    },[]);
    
    return[mInvItems,setMInvItems];
};
export default useManageInventories;