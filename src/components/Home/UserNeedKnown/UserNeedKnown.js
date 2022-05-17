import React from 'react';
import { Accordion } from 'react-bootstrap';

const UserNeedKnown = () => {
    return (
       <div>
         <div className="p-5" style={{marginTop:"40px"}}>
         <h2>What services we offer to our clients</h2>
         <p>who are with extremely love with eco friendly system</p>
         </div>

         <div className="my-4 ">
         <div className="row row-cols-1 row-cols-lg-3 w-100 p-4  mx-auto ">
         <div style={{backgroundColor:'wheat'}} className="p-5">
         <div className="d-flex justify-center items-center ">
         <span><svg style={{width:"30px"}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path></svg></span>
         <h2>Expert technicians</h2>
         </div>
         <p>Usage of the internet is becoming more common due to rapid advancement of technology and power.</p>
         </div>
         <div  style={{backgroundColor:'wheat'}} className="p-5">
         <div className="d-flex justify-center items-center">
         <span><svg style={{width:"40px"}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="handshake" class="svg-inline--fa fa-handshake me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M0 383.9l64 .0404c17.75 0 32-14.29 32-32.03V128.3L0 128.3V383.9zM48 320.1c8.75 0 16 7.118 16 15.99c0 8.742-7.25 15.99-16 15.99S32 344.8 32 336.1C32 327.2 39.25 320.1 48 320.1zM348.8 64c-7.941 0-15.66 2.969-21.52 8.328L228.9 162.3C228.8 162.5 228.8 162.7 228.6 162.7C212 178.3 212.3 203.2 226.5 218.7c12.75 13.1 39.38 17.62 56.13 2.75C282.8 221.3 282.9 221.3 283 221.2l79.88-73.1c6.5-5.871 16.75-5.496 22.62 1c6 6.496 5.5 16.62-1 22.62l-26.12 23.87L504 313.7c2.875 2.496 5.5 4.996 7.875 7.742V127.1c-40.98-40.96-96.48-63.88-154.4-63.88L348.8 64zM334.6 217.4l-30 27.49c-29.75 27.11-75.25 24.49-101.8-4.371C176 211.2 178.1 165.7 207.3 138.9L289.1 64H282.5C224.7 64 169.1 87.08 128.2 127.9L128 351.8l18.25 .0369l90.5 81.82c27.5 22.37 67.75 18.12 90-9.246l18.12 15.24c15.88 12.1 39.38 10.5 52.38-5.371l31.38-38.6l5.374 4.498c13.75 11 33.88 9.002 45-4.748l9.538-11.78c11.12-13.75 9.036-33.78-4.694-44.93L334.6 217.4zM544 128.4v223.6c0 17.62 14.25 32.05 31.1 32.05L640 384V128.1L544 128.4zM592 352c-8.75 0-16-7.246-16-15.99c0-8.875 7.25-15.99 16-15.99S608 327.2 608 336.1C608 344.8 600.8 352 592 352z"></path></svg></span>
         <h2>Professonal services</h2>
         </div>
         <p>Professional services are occupations in the service sector requiring special training.</p>
         </div>
         <div  style={{backgroundColor:'wheat'}} className="p-5">
         <div className="d-flex justify-center items-center">
         <span><svg style={{width:"40px"}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hand-holding-medical" class="svg-inline--fa fa-hand-holding-medical me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM160 176h64v64C224 248.8 231.2 256 240 256h64C312.8 256 320 248.8 320 240v-64h64c8.836 0 16-7.164 16-16V96c0-8.838-7.164-16-16-16h-64v-64C320 7.162 312.8 0 304 0h-64C231.2 0 224 7.162 224 16v64H160C151.2 80 144 87.16 144 96v64C144 168.8 151.2 176 160 176z"></path></svg></span>
         <h2>Great support</h2>
         </div>
         <p>The Convention is an outstanding achievement that has already received great support.</p>
         </div>
         </div>
         </div>
       </div>
    );
};

export default UserNeedKnown;