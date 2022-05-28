import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import FilterBar from './component/FilterBar';
import SingleProduct from './component/SingleProduct';
import {data} from './data.js'


function App() {

  const [allData , setAllData] = data

  return (
    <>
      <Container>

          <Row>
            <Col sm={4}>    
              <FilterBar/>
            </Col>
            <Col sm={8}>
              {
                
                allData.map()
              }
              <SingleProduct/>
            </Col>
          </Row>
      </Container>    
    </>
  );
}

export default App;
