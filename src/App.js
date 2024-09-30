import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';
import EmpDetail from './EmpDetail';

function App() {
    return (
        <div className="App">
            <h1 style={{'color':'orange','marginBottom':'50px','marginTop':'20px'}}>React Js Crud Operations</h1>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<EmpListing/>}></Route>
                <Route path='/employee/create' element={<EmpCreate/>}></Route>
                <Route path='/employee/detail/:empid' element={<EmpDetail/>}></Route>
                <Route path='/employee/edit/:empid' element={<EmpEdit/>}></Route>
              </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
