import { useState } from 'react';
import './App.css';
import FilterBar from './component/FilterBar';
import SingleProduct from './component/SingleProduct';
import {data} from './data.js'

function App() {

  const [allData , setAllData] = useState(data)

  const generateDataFromDropDown =()=>{
    return [...new Set(data.map((item)=>item.gender))];
  }

  const filterHandle=(name)=>{
    data.map((item)=>{
      const fullname = `${item.first_name} ${item.last_name}`;
      return console.log(fullname)
    })   
  }
  
  return (
    <>
     <div className='container'>
        <div className="row">
          <div className="col-sm-3">
            <FilterBar gender={generateDataFromDropDown()} filterHandle={filterHandle} />
          </div>
          <div className='col-sm-9'>
            <div className='row mt-5'>
              {
                allData.map((item)=>(<SingleProduct key={item.id} item={item} />))
              }
            </div>
          </div>
        </div>
     </div>
    </>
  );
}

export default App;