import React from 'react';
import axios from 'axios';
import { Card, Row, Button, Col ,Modal,Form} from "react-bootstrap";



class Faviourit extends React.Component {

  constructor(prpos) {
    super(prpos);
    this.state = {
      data: [],
      show:false,
      index:-1,
      name:"",
      url:"",
      
    }
  }
  componentDidMount = async () => {
    const server = `https://poki-ahmad.herokuapp.com`
    const URL = await axios.get(`${server}/getFavData`)

    this.setState({
      data: URL.data
    })
  
  }
  deleteFunc = async (id) => {
    const server = `https://poki-ahmad.herokuapp.com`
    const deleteData = await axios.delete(`${server}/deleteFunc?id=${id}`);
    this.setState({
      data:deleteData.data
    })
    
  }
  showModal=(idx)=>{
    this.setState({
      show:true,
      index:idx,
      name:this.state.data[idx].name,
      url:this.state.data[idx].url
      
    })
    
  }
  closeModal=()=>{
    this.setState({
      show:false
    })
  
  }
  updateFunc=async(event)=>{
    event.preventDefault();
  const server = `https://poki-ahmad.herokuapp.com`;
   const obj={
    name:event.target.name.value,
    url:event.target.url.value,
    id:this.state.data[this.state.index]._id
   }
   console.log(obj)
   const URL = await axios.put(`${server}/updateFavData/${this.state.index}`,obj)
    
    this.setState({
      show:false,
      data: URL.data
    })
    console.log(this.state.data)
  }


  render() {
    return (
      <>
     
        <Row xs={1} md={3} className="g-4">
          {this.state.data.map((item, idx) => {
            return (
              

              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.url}</Card.Text>
                    <Button variant="primary" onClick={()=>this.deleteFunc(item._id)}>Delete</Button>
                    <Button variant="primary" onClick={()=>this.showModal(idx)}>Update</Button>

                  </Card.Body>
                </Card>
                
              </Col>
             
            )
          })}
        </Row>
       
        <Modal show={this.state.show} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.updateFunc}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text"name='name' defaultValue={this.state.name} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>URL</Form.Label>
    <Form.Control type="text"name='url' defaultValue={this.state.url} />
  </Form.Group>
  <Button type="submit" variant="secondary" >Save</Button>
</Form>
        </Modal.Body>
        
      </Modal>
     

</>
      
    )
  }
}
export default Faviourit;