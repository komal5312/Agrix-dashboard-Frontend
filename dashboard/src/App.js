import React from 'react';
import './App.css';
import NavbarComp from './Components/NavbarComp';
import {
  BrowserRouter as Router,
  Route,
  Routes
 
} from 'react-router-dom'

import Agrix from './Components/Agrix';
import Farmer_List from "./Components/Farmer_List"
import Cluster from "./Components/Cluster"
import Admin from "./Components/Admin"
import Implement_Bank from "./Components/Implement_Banks"
import Overview from "./Components/Overview"
import Keshauri from './Components/Keshauri';
import Daulatpur from  './Components/Daulatpur';
import Dumrama from './Components/Dumrama';
import Chaurahi from './Components/Chaurahi';
import Lakhisharai from './Components/Lakhisharai';
import Darbhanga from './Components/Darbhanga';


function App() {
  return (
    <>
    <NavbarComp/>
      <div className="App">

<Router>
<Routes>
 
<Route exact path="/" element={<Agrix/>} />
<Route exact path="/" element={<Admin/>}/>
<Route exact path="/Overview" element={<Overview/>}/>
<Route exact path="/Implement_Banks" element={<Implement_Bank/>}/>
<Route exact path="/Cluster"    element={<Cluster/>}/>
<Route exact path="/Farmer_List" element={<Farmer_List/>}/>
<Route exact path="/keshauri"   element={<Keshauri/>}/>
<Route exact path="/dumrama"    element={<Dumrama/>}/>
<Route exact path="/chaurahi"      element={<Chaurahi/>}/>
<Route exact path="/lakhisharai"element={<Lakhisharai/>}/>
<Route exact path="/darbhanga" element={<Darbhanga/>}/>
<Route exact path="/daulatpur" element={<Daulatpur/>}/>
</Routes>
</Router>







      </div>
    </>
  );
}

export default App;
