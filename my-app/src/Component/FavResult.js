import React from 'react';
import { Card, Row, Button, Col ,Modal,Form} from "react-bootstrap";


class FavResult extends React.Component{



  render(){
    return(
      <>
{/* <Modal show={this.state.show} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.updateFunc}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text"name='name' value={item.name} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>URL</Form.Label>
    <Form.Control type="text"name='url' value={item.url} />
  </Form.Group>
  <Button type="submit" variant="secondary" >Save</Button>
</Form>
        </Modal.Body>
        
      </Modal> */}
      </>
    )
  }
}
export default FavResult;