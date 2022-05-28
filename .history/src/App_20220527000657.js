import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import FilterBar from './component/FilterBar';
import SingleProduct from './component/SingleProduct';


function App() {
  return (
    <>
      <Container>

          <Row>
            <Col sm={4}>    
              <SingleProduct/>
            </Col>
            <Col>
              <FilterBar/>
            
            </Col>
          </Row>

      </Container>    
    </>
  );
}

export default App;
