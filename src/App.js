import Header from './Components/Header/ParentHeader/Header';
import Home from './Components/Home/ParentHome/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from './Components/Details/DetailView';
import Cart from './Components/Cart/Cart';
import Payment from './Components/Payments/Payment';
import Profile from './Components/Header/Profile/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header />
          <div style={{marginTop:64}}> {/*margin top cause we have kept the header fixed positioned*/}
               <Routes>  {/*we are wrapping cause we need to use routing on these components */}
                   <Route path='/' element={<Home/>}/>  {/*home UI renders when there's nothing after / in url */}
                   <Route path='/product/:id' element={<DetailView />}/>  {/*id is a variable*/}
                   <Route path='/cart' element={<Cart />}/> 
                   <Route path='/payment' element={<Payment />}/> 
                   <Route path='/profile' element={<Profile />}/>
               </Routes>
          </div>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
