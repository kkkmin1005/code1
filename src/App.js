import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/mainpage.js'
import FundingPage from './pages/fundingpage.js'
import LoginPage from './pages/loginpage.js'
import Detail from './pages/detail';
import CheckoutPage from './pages/pay';
import { SuccessPage } from './pages/success';
import { FailPage } from './pages/fail';
import React, { useEffect, useState } from 'react';
import UserPage from './pages/user.js'


function App() {
  const [loginState, setLoginState] = useState('Login'); 
  const [logurlState, setLogurlState]= useState('/login');

  useEffect(()=> {
    const storedLoginState = localStorage.getItem('cookie');
    const storedUrlState = localStorage.getItem('url');
    if (storedLoginState && storedUrlState) {
      setLoginState(storedLoginState);
      setLogurlState(storedUrlState);
    }
  }, []);

  return (
    <div className="App">
  
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/home">SAMSAMOO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/funding">Funding</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href={logurlState}>{loginState}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/home' element={<Mainpage/>} />
        <Route path='/funding' element={<FundingPage/>} />
        <Route path='/about' element={<div>우리 사이트에 관하여...</div>} />
        <Route path='/login' element={<LoginPage setLoginState={setLoginState} setLogurlState={setLogurlState}/>} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path= '/pay' element= {<CheckoutPage />} />
        <Route path= '/pay/success' element= {<SuccessPage />} />
        <Route path= '/pay/fail' element= {<FailPage />} />
        <Route path='/user' element= {<UserPage setLoginState={setLoginState} setLogurlState={setLogurlState}/>} />
      </Routes>
    </div>
  );
}

export default App;
