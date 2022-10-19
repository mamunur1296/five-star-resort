import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UseContext";

const Login = () => {
  const { Login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handallogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    Login(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(email, password);
  };
  return (
    <div className="my-5 w-75 mx-auto">
      <h4>Register</h4>
      <Form onSubmit={handallogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <div>
          <small>pleass at fast ? </small>
          <Link>
            <small>regester</small>
          </Link>
        </div>
        <Button className="my-5" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
