import React, { useState, useCallback, useEffect } from "react";
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
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./style";
import { IFormValues } from "interface/login";
import { useObserver } from "mobx-react";
import userStore from "store/user";
import Copyright from "components/common/copyright";
import Notification from "components/public/notification";
import { useHistory } from "react-router-dom";

const Login = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState<IFormValues>({
    email: "",
    password: ""
  });
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);
  const [loginFailMsg, setLoginFailMsg] = useState<string>("");

  const history = useHistory();
  const emailValidationRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleAfterLogin = () => {
    history.push("/main");
  };

  const handleLogin = async () => {
    try {
      await userStore.login(formValues);
      handleAfterLogin();
    } catch (e) {
      setVisible(true);
      setLoginFailMsg(e.message);
    }
  };

  useEffect(() => {
    if (userStore.userProfile) {
      handleAfterLogin();
    }
  }, []);

  const handleOnChange = (fieldName: keyof IFormValues) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormValues({ ...formValues, [fieldName]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = emailValidation();
    if (isValid) {
      handleLogin();
    }
  };

  const emailValidation = () => {
    const { email } = formValues;
    const isValid = emailValidationRegex.test(email.toLowerCase());
    setIsEmailValid(isValid);
    return isValid;
  };

  return useObserver(() => (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome to Mock API
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            onChange={handleOnChange("email")}
            onBlur={emailValidation}
            value={formValues.email}
            helperText={"Invalid email format"}
            error={!isEmailValid}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formValues.password}
            onChange={handleOnChange("password")}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <Notification
        variant={"error"}
        message="Username or password is wrong!"
        visible={visible}
        setVisible={setVisible}
      />
    </Container>
  ));
};

export default Login;
