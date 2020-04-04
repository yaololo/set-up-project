import React, { useState, useEffect } from "react";
import { TextField, Typography, Container } from "@material-ui/core";
import { useStyles } from "./style";
import { IFormValues } from "interface/signup";
import { validateEmail } from "lib/validator";
import Button from "components/public/button";
import userStore from "store/user";
import { useObserver } from "mobx-react";
import { useHistory } from "react-router-dom";
import { isSuccessful } from "lib/utils";
import Notification from "components/public/notification";

const Signup = () => {
  const [formValues, setFormValues] = useState<IFormValues>({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordMatched, setIsPasswordMatched] = useState<boolean>(true);
  const [signUpFailMsg, setSignUpFailMsg] = useState<string>("");
  const [isErrorVisible, setIsErrorVisible] = useState<boolean>(false);

  const history = useHistory();
  const classes = useStyles();

  const emailValidation = () => {
    const { email } = formValues;
    const isValid = validateEmail.test(email.toLowerCase());
    setIsValidEmail(isValid);
    return isValid;
  };

  const validatePassword = () => {
    const { password, confirmPassword } = formValues;
    const isMatched = password === confirmPassword;
    setIsPasswordMatched(isMatched);
    return isMatched;
  };

  const handleOnChange = (fieldName: keyof IFormValues) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormValues({ ...formValues, [fieldName]: event.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmailValid = emailValidation();
    const isPasswordMatch = validatePassword();

    try {
      await userStore.signup(formValues);
      history.push("/main/account");
    } catch (e) {
      setIsErrorVisible(true);
      setSignUpFailMsg(e.message);
    }
  };

  return useObserver(() => (
    <div className={classes.wrapper}>
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Create Account
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
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
              helperText={isValidEmail ? null : "Invalid email format"}
              error={!isValidEmail}
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
              label="Confirm Password"
              type="password"
              value={formValues.confirmPassword}
              helperText={isPasswordMatched ? null : "Password not match"}
              onChange={handleOnChange("confirmPassword")}
              error={!isPasswordMatched}
              onBlur={validatePassword}
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            isLoading={isLoading}
          >
            Sign In
          </Button>
        </form>
        <Notification
          variant={"error"}
          message={signUpFailMsg}
          visible={isErrorVisible}
          setVisible={setIsErrorVisible}
        />
      </Container>
    </div>
  ));
};

export default Signup;
