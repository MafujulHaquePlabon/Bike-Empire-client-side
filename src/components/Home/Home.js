import React from 'react';
import Banner from './Banner/Banner';
import BikeBrand from './BikeBrand/BikeBrand';
import InventoryItems from './InventoryItems/InventoryItems';
import UserNeedKnown from './UserNeedKnown/UserNeedKnown';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <BikeBrand></BikeBrand>
            <UserNeedKnown></UserNeedKnown>
         
           
        </div>
    );
};

export default Home;