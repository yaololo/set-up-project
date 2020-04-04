import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container
} from "@material-ui/core";
import { useStyles } from "./style";
import { IFormValues } from "interface/signup";
import { validateEmail } from "lib/validator";

const Signup = () => {
  const [formValues, setFormValues] = useState<IFormValues>({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [validEmail, setValidEmail] = useState<boolean>(true);

  const classes = useStyles();

  const emailValidation = () => {
    const { email } = formValues;
    const isValid = validateEmail.test(email.toLowerCase());
    setValidEmail(isValid);
    return isValid;
  };

  const handleOnChange = (fieldName: keyof IFormValues) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormValues({ ...formValues, [fieldName]: event.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          autoFocus
          onChange={handleOnChange("email")}
          onBlur={emailValidation}
          value={formValues.email}
          helperText={"Invalid email format"}
          error={!validEmail}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={formValues.password}
          onChange={handleOnChange("password")}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={formValues.password}
          onChange={handleOnChange("password")}
        />
      </div>
    </Container>
  );
};

export default Signup;
