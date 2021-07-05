import axios from 'axios';
import React from 'react';
import{Card,Row,Button} from"react-bootstrap";


class HomeResult extends React.Component{



favFunc=async()=>{
    const server=`https://poki-ahmad.herokuapp.com`
    const obj={
        name:this.props.item.name,
        url:this.props.item.url
    }
    await axios.post(`${server}/favData`,obj)
}

  render(){
    return(
      <>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{this.props.item.name}</Card.Title>
    <Card.Text>{this.props.item.url}</Card.Text>
    <Button variant="primary" onClick={this.favFunc}>Add To Faviourit</Button>
  </Card.Body>
</Card>
      </>
    )
  }
}
export default HomeResult;