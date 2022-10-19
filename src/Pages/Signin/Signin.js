import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UseContext";

const Signin = () => {
  const { RegesterUser } = useContext(AuthContext);
  const handalRegester = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    RegesterUser(email, password)
      .then((res) => {
        const user = res.user;
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(name, email, password);
  };
  return (
    <div className="my-5 w-75 mx-auto">
      <h4>Register</h4>
      <Form onSubmit={handalRegester}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            placeholder="Enter your name"
          />
        </Form.Group>
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
          <Link>
            <small className="me-2">forgate your password</small>
          </Link>
          <small>alrady have an accoutn ? </small>
          <Link>
            <small>log in</small>
          </Link>
        </div>
        <Button variant="primary" type="submit">
          regester
        </Button>
      </Form>
    </div>
  );
};

export default Signin;
