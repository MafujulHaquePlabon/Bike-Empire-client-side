import React from 'react';
import { Accordion } from 'react-bootstrap';

const UserNeedKnown = () => {
    return (
        <div className="top-5">
             <h4 className="text-success fw-bolder my-5">It is important for the user to know that common thing:</h4>
            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header> <span className="fw-bolder">Is there a possibility of cheating?</span> </Accordion.Header>
    <Accordion.Body>
    We do business honestly.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><span className="fw-bolder">How to contact?</span></Accordion.Header>
    <Accordion.Body>
    Phone and message to contact us. All information is given on the contact page.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default UserNeedKnown;