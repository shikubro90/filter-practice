import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import FilterBar from './component/FilterBar';
import SingleProduct from './component/SingleProduct';
import {data} from './data.js'


function App() {

  const [allData , setAllData] = useState(data)

  return (
    <>
      <Container>

          <Row>
            <Col sm={3}>    
              <FilterBar/>
            </Col>
            <Col sm={9}>
              <div className='row mt-5'>
                {
                  allData.map((item)=>(
                  <SingleProduct item={item} />
                  ))
                }
              </div>
            </Col>
          </Row>
      </Container>    
    </>
  );
}

export default App;
