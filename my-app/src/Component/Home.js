import axios from 'axios';
import React from 'react';
import HomeResult from './HomeResult';
import{Card,Row,Col} from"react-bootstrap";


class Home extends React.Component{

  constructor(prpos){
    super(prpos);
    this.state={
      data:[],
    }
  }
componentDidMount=async()=>{
  const server=`https://poki-ahmad.herokuapp.com`
  const URL=await axios.get(`${server}/getData`)
  
  this.setState({
    data:URL.data
  })
 
}

  render(){
    return(
      <>
      <Row xs={1} md={3} className="g-4"> 
{this.state.data.map((item,idx)=>{
  return(
  <Col> 
<HomeResult
item={item}
/>
 </Col> 
)})}
</Row>
      </>
    )
  }
}
export default Home;