import Header from './Components/Header/ParentHeader/Header';
import Home from './Components/Home/ParentHome/Home';

function App() {
  return (
    <div>
      <Header />
      <div style={{marginTop:64}}> {/*margin top cause we have kept the header fixed positioned*/}
         <Home/>  
      </div>
    </div>
  ); 
}

export default App;
