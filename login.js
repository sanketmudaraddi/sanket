import React from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";



// class Login extends React.Component{
//     state = {
//         name : "",password : "",redirect: null
//     }

//      validateForm() {
//         return this.state.name.length > 0 && this.state.password.length > 0;
//       }

      

//       submit = (e) =>{
//           e.preventDefault();
//           this.setState({ name: "", password: ""});
//           console.log(this.state.name);
//           if(this.state.name === 'Dev' && this.state.password === 'escn'){
//               alert('succesful')
//               //this.redirect()
//               this.setState({ redirect: "/reader" })
//           }
//           else{
//               alert('Error')   
//           }
//       }
//     render(){
//         if (this.state.redirect) {
//             return <Redirect to={this.state.redirect} />
//           }
//         return(
//             <div className="ui main">
//                 <h2>Login</h2>
//         <form className="ui form" onSubmit={this.submit}>
//           <div className="field">
//             <label>Reader Name</label>
//     <input type="text" name="name" placeholder="Name"
//       value={this.state.name}
//      onChange={(e) => 
//       this.setState({ name: e.target.value })}
//          />
//           </div>
//           <div className="field">
//             <label>Password</label>
//             <input
//               type="text"
//               name="password"
//               placeholder="Password"
//               value={this.state.password}
//               onChange={(e) => this.setState({ password: e.target.value })}
//                  />
//           </div>
//           <button className="ui button blue" disabled={!this.validateForm()}>
//             Login</button>
//         </form>
//       </div>
//         )
//     }
// }

// export default Login;

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();


  function validateForm() {
    return name.length > 0 && password.length > 0;
  }

    const checkUser = (e) =>{
        e.preventDefault();
        if(name === 'Dev' && password === 'escn'){
            alert('Succesful')
            history.push('/reader')
        }
        else{
            alert('Error')
        }
    }

//   function checkUser(){
//       if(this.email === 'admin' && this.password === 'password'){
//           alert('Succesful')
//       }
//       else{
//           alert('Error')
//       }
//   }

  return (
    <div className="Login">
      <Form onSubmit={checkUser}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="usn">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
