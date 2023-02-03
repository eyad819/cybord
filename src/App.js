import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import './App.css';
import {Container } from './comp/index';
import {Home,Profile} from './Pages/index';
import { Header, Footer} from './sections/index';
function App() {
  return (
    <>
  <Router>
  <Header/>
    
    <Container>
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/profile' element={<Profile/>}/>
        
    </Routes>
    </Container>
    <Footer/>

  </Router>
    </>
  );
}

export default App;