import React, { useEffect, useState } from 'react';

const useManageInventories = () => {
    const [mInvItems,setMInvItems]=useState([]);
    useEffect(()=>{
        fetch(' https://aqueous-tundra-23230.herokuapp.com/ManageInventories')
        .then(res=>res.json())
        .then(data=>setMInvItems(data))
    },[mInvItems]);
    
    return[mInvItems,setMInvItems];
};
export default useManageInventories;

/*  useEffect( () =>{
         fetch('http://localhost:5000/ManageInventories')
         .then(res => res.json())
         .then(data => {
            setManageInventories(data)
            console.log('success')
         });
     }, [reload]); */