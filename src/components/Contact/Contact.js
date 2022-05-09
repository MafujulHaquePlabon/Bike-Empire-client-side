import React from 'react';

const Contact = () => {
    return (
        <div style={{marginTop:'70px',justifyContent:'center',alignItems:'center'}} className="d-flex ">
            <div  className="d-flex ">
                <div>
                   <img style={{width:75}} src="https://cdn-icons-png.flaticon.com/512/552/552489.png" alt="" /> 
                   <h2>BY PHONE</h2>
                   <p><small>(Monday to Friday, 9am to 4pm)</small></p>
                   <h2> For Bangladesh:</h2>
                   <h2>01708337731</h2>
                   <h2>International:</h2>
                   <h2>1-604-637-0780</h2>
                </div>
                <div>
                   <img style={{width:100}} src="https://media.flaticon.com/dist/min/img/stickers-banner.png" alt="" />
                    <h2>Message Social Media</h2>
                    <div>
                    <img style={{width:50}} className="" src="https://img.icons8.com/fluency/344/facebook-new.png" alt="" />
                   <img style={{width:50}} className="bg-white rounded" src="https://img.icons8.com/color/344/whatsapp--v1.png" alt="" />
                   <img style={{width:50}} src="https://img.icons8.com/fluency/344/telegram-app.png" alt="" />
                   <img style={{width:50}} src="https://img.icons8.com/color/344/linkedin.png" alt="" />
               </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;