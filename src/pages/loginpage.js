import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './loginpage.css'


function LoginPage({setLoginState, setLogurlState}){
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleIdChange = (e) => {
      setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleSubmitChange = (e) => {
      e.preventDefault();

      fetch('https://api.google.com/user', {
        method: 'post',
        body: JSON.stringify({
            email: id,
            password: password
        })
      })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
            alert("로그인 성공");
            localStorage.setItem('cookie', id);
            localStorage.setItem('url', '/user');
            setLoginState(id); // 로그인 상태 변경
            setLogurlState('/user');
        } else{
          alert('로그인 실패')
        }
      })


    };

    return (
    <div className='loginbox'>
      <Form className='login'>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleIdChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <p>Entered email: {id}</p>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
          <p>Entered password: {password}</p>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmitChange}>
          Submit
        </Button>
      </Form>
    </div>
    );
  }

  export default LoginPage