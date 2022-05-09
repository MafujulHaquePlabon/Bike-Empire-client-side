import React from 'react';
import Banner from './Banner/Banner';
import BikeBrand from './BikeBrand/BikeBrand';
import InventoryItems from './InventoryItems/InventoryItems';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <BikeBrand></BikeBrand>
           
        </div>
    );
};

export default Home;