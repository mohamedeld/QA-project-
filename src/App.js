import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FormInput } from "./components/FormInput";
import { Accord } from "./components/Accord";
import { questions } from "./data";
function App() {
  const[data ,setData] = useState(questions);

  const addItem = ()=>{
    setData([...questions]);
  }

  const deleteAllItem = ()=>{
    questions.splice(0,questions.length);
    setData([]);
  }
  const deleteOneItem=(item)=>{
    setData([...item]);
  }
  return (
    <div className="text-center">
      <Container className="p-5">
        <Row className="justify-content-center ">
          <Col sm="4">
            <h3 className="fs-4">Common Questions and Answers</h3>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem}/>
            <Accord data={data} deleteOneItem={deleteOneItem}/>
            {data.length >=1 ? (<Button onClick={deleteAllItem} className="btn btn-danger w-100 my-3">Delete All</Button>):null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
