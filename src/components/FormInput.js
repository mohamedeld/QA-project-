import React from "react";
import { Row, Form, Button, Col } from "react-bootstrap";

export const FormInput = () => {
  return (
    <Row>
      <Col sm="5">
        <Form.Control type="text" placeholder="Enter Your Question" />
      </Col>
      <Col sm="5">
        <Form.Control type="text" placeholder="Enter Your Answer" />
      </Col>
      <Col sm="2">
        <Button variant="primary" className="w-100" type="submit">
          Add
        </Button>
      </Col>
    </Row>
  );
};
