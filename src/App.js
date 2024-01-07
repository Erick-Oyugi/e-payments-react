import Login from './pages/Login/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  return (
    
  <Router>
    <Routes>
    <Route path="/" element= { <Login/>}></Route>
  </Routes>
   

 </Router>
  );
}

export default App;
