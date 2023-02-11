import React from "react";
import { Accordion, Row } from "react-bootstrap";
export const Accord = () => {
  return (
    <Row className="py-3">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <div className="d-inline px-3">Answer First Question</div>
            <button className="btn btn-danger">Delete Question</button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Row>
  );
};
