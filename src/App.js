import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FormInput } from "./components/FormInput";
import { Accord } from "./components/Accord";
function App() {
  return (
    <div className="text-center">
      <Container className="p-5">
        <Row className="justify-content-center ">
          <Col sm="4">
            <h3 className="fs-4">Common Questions and Answers</h3>
          </Col>
          <Col sm="8">
            <FormInput />
            <Accord/>
            <Button className="btn btn-danger w-100 my-3">Delete All</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
