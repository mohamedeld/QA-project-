import React,{useState} from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import { questions } from "../data";
export const FormInput = ({onAdd}) => {
    const [question,setQuestion] = useState('');
    const [answer,setAnswer] = useState('');
    const addNewItem = ()=>{
        questions.push({id:Math.random(),question:question,answer:answer});
        setQuestion('');
        setAnswer('');
        onAdd();
    }
  return (
    <Row>
      <Col sm="5">
        <Form.Control value={question} onChange={(e)=>setQuestion(e.target.value)} type="text" placeholder="Enter Your Question" />
      </Col>
      <Col sm="5">
        <Form.Control value={answer} onChange={(e)=>setAnswer(e.target.value)} type="text" placeholder="Enter Your Answer" />
      </Col>
      <Col sm="2">
        <Button onClick={addNewItem} variant="primary" className="w-100" type="submit">
          Add
        </Button>
      </Col>
    </Row>
  );
};
