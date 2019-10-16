import React, { Component } from "react";
import styled from "styled-components";
// import {
//   Container,
//   Col,
//   Form,
//   FormGroup,
//   InputGroup,
//   Button,
//   FormControl
// } from "react-bootstrap";

import {
  Container,
  Col,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Form
} from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validate: {
        emailState: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  }

  handleChange = async event => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value
    });
  };

  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);
  }

  render() {
    const { email, password } = this.state;
    // const { Label } = InputGroup;
    const { FormFeedback } = FormControl;
    return (
      <LoginWrapper>
        <Container className="App">
          <h2>Sign In</h2>
          <Form className="form" onSubmit={e => this.submitForm(e)}>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  isValid={this.state.validate.emailState === "has-success"}
                  isInvalid={this.state.validate.emailState === "has-danger"}
                  onChange={e => {
                    this.validateEmail(e);
                    this.handleChange(e);
                  }}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Wrong email format!
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <FormGroup>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password here"
                  value={password}
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
          </Form>
        </Container>
      </LoginWrapper>
    );
  }
}

export default Login;

const LoginWrapper = styled.div`
  .App {
    text-align: left;
    padding: 1em;
    margin: 1em;
    border: 2px solid #d3d3d3;
    border-radius: 0.5em;
    vertical-align: middle;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    margin-top: 100px;
  }

  .form {
    padding: 1em;
  }

  .form-group {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  label {
    display: flex;
    font-weight: 600;
  }

  button {
    justify-content: flex-end;
  }

  .App-title {
    font-size: 1.5em;
  }

  .App-intro {
    font-size: large;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
