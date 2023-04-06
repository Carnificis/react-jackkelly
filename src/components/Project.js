import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';
function Project(props)  {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + props.projectdetail.screenshot}
          />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              {" "}
              {props.projectdetail.title}
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <a href={props.projectdetails.github} variant="primary" xs={6}>
              Github
            </a>
            <a href={props.projectdetails.livelink} variant="primary" xs={6}>
              Live Link
            </a>
          </Card.Body>
        </Card>
      </>
    ); 
}



export default Project 