import React from "react";
import { Accordion, Row } from "react-bootstrap";
import {questions} from "../data";
export const Accord = ({ data,deleteOneItem }) => {
    const onDeleteOneItem=(id)=>{
        if(data.length>=1){
            let index = questions.findIndex((item)=>{
                return item.id === id;
            });
            questions.splice(index,1); 
            deleteOneItem(questions);
        }
        
    }
  return (
    <Row className="py-3">
      <Accordion defaultActiveKey="0">
        {data.length >= 1 ? (
          data.map((d,index) => {
            return (
              <Accordion.Item key={index} eventKey={d.id}>
                <Accordion.Header>{d.question}</Accordion.Header>
                <Accordion.Body>
                  <div className="d-inline px-3">{d.answer}</div>
                  <button onClick={()=>onDeleteOneItem(d.id)} className="btn btn-danger">Delete Question</button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="text-center py-4">There are no questions</h2>
        )}
      </Accordion>
    </Row>
  );
};
