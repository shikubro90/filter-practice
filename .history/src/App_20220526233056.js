import { Container } from 'react-bootstrap';
import './App.css';
import FilterBar from './component/FilterBar';
import Singleproduct from './component/Singleproduct';


function App() {
  return (
    <>
      <Container>
        <Singleproduct/>
        <FilterBar/>
      </Container>    
    </>
  );
}

export default App;
