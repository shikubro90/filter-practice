import { useState } from 'react';
import './App.css';
import FilterBar from './component/FilterBar';
import SingleProduct from './component/SingleProduct';
import {data} from './data.js'


function App() {

  const [allData , setAllData] = useState(data)

  return (
    <>
     <div className='container'>
        <div className="row">
          <div className="col-sm-3">

          </div>
          <div className='col-sm-9'>
            <SingleProduct
          </div>
        </div>
     </div>
    </>
  );
}

export default App;
