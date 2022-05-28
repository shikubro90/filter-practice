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
              <FilterBar/>
            </Col>
            <Col>
            </Col>
          </Row>

      </Container>    
    </>
  );
}

export default App;
