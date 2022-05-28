import { Container } from 'react-bootstrap';
import './App.css';
import FilterBar from './component/FilterBar';
import SingleProduct from './component/SingleProduct';


function App() {
  return (
    <>
      <Container>
        <SingleProduct/>
        <FilterBar/>
      </Container>    
    </>
  );
}

export default App;
