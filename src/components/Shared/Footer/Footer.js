import React from 'react';


const Footer = () => {
    return (
        <div style={{marginTop:"110px"}}>
            <div  style={{height:'250px'}} className="bg-dark">
              <div>
              <p className="text-white fw-bold pt-5">Experience Bike Reviews, News, and Latest Motorcycle Price In Bangladesh At warehouse management Bike.com</p>
               <div className="">
                   <img style={{width:50}} className="bg-white rounded" src="https://img.icons8.com/ios-filled/344/github.png" alt="" />
                   <img style={{width:50}} src="https://img.icons8.com/fluency/344/youtube-play.png" alt="" />
                   <img style={{width:50}} src="https://img.icons8.com/color/344/linkedin.png" alt="" />
               </div>
               <p className="text-white fw-bold pt-2">© 2021 bike. All rights reserved</p>
              </div>
            </div>
        </div>
    );
};

export default Footer;