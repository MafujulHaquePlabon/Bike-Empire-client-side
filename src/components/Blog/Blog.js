import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className="w-100 mt-5" >
            <div className="row row-cols-1  md:row-cols-3 gap-5 p-5 w-100 ">
            
            <Card border="primary" style={{ width: '25rem' }}>
              <Card.Header className="fw-bold">Difference between javascript and nodejs:</Card.Header>
              <Card.Body>
                <Card.Title> </Card.Title>
                <Card.Text>
                JavaScript is a language that runs inside web browsers as part of the documents loaded by the browser and is used as a client-side development language. It provides the behavior of the pages. Like HTML it provides the semantic structure and CSS the look and feel.
                However, being an interpreted language, it needs an interpreter to run. V8 is Google Chrome's JS engine and 'node' is a front-end that can be used to run JavaScript scripts outside the browser.

                NodeJs is an open source, cross-platform environment that allows to create server-side applications and tools using JavaScript.

               <div>
             <span className="fw-bolder">  A short list of comparisons:</span>
                <p><span className="fw-bolder">JS</span><br />
                🔴 Can only be run in the browsers
                <br />
                🔴 Used on the client-side <br />
                🔴 Capable enough to add HTML and play with the DOM <br />
              </p>
              <span className="fw-bolder">NodeJs</span>
               
            <p >
           
               🟡 Can be run outside the browser <br />
               🟡 Used on the server-side. <br />
               🟡 Does not have the capability to add HTML tags <br />
            </p>
               </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          
            <Card border="secondary" style={{ width: '25rem' }}>
              <Card.Header className="fw-bold"> When should you use nodejs and when should you use mongodb?</Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
               
              <p >
              Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.

              </p>
               <p className="mt-5">
               MongoDB is a great database for web applications, especially if the application services many users who do not interact with each other.MongoDB is a powerful database with many capabilities. MongoDB is ideal for cloud computing. Cloud-based storage needs to easily distribute data across multiple servers, which suits MongoDB's nature perfectly. Need my data fast and easily accessible.
               </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          
            <Card border="success" style={{ width: '25rem' }}>
              <Card.Header className="fw-bold">Differences between sql and nosql databases:</Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                <div>
             <span className="fw-bolder">  A short list of comparisons:</span>
                <p><span className="fw-bolder">SQL</span><br />
                🔴 RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).
                🔴 These databases are not suited for hierarchical data storage..
                <br />
                🔴  These databases have fixed or static or predefined schema. <br />
                🔴 These databases are best suited for complex queries. <br />
                🔴 Vertically Scalable. <br />
                🔴 Follows ACID property. <br />
                
              </p>
              <span className="fw-bolder">noSQL</span>
               
            <p >
           
               🟡 Non-relational or distributed database system. <br />
               🟡 They have dynamic schema. <br />
               🟡 These databases are best suited for hierarchical data storage. <br />
               🟡  hese databases are not so good for complex queries. <br />
               🟡 Horizontally scalable. <br />
               🟡 Follows CAP(consistency, availability, partition tolerance)<br />
            </p>
               </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
                  </div>
        </div>
    );
};

export default Blog;