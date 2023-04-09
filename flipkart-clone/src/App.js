import Header from './Components/Header/ParentHeader/Header';
import Home from './Components/Home/ParentHome/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from './Components/Details/DetailView';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header />
          <div style={{marginTop:64}}> {/*margin top cause we have kept the header fixed positioned*/}
               <Routes>  {/*we are wrapping cause we need to use routing on these components */}
                   <Route path='/' element={<Home/>}/>  {/*home UI renders when there's nothing after / in url */}
                   <Route path='/product/:id' element={<DetailView/>}/>  {/*id is a variable*/}
                   
               </Routes>
          </div>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
