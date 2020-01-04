import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./style";

interface IFormValues {
  email: string;
  password: string;
}

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="#"
        onClick={(e: React.MouseEvent) => e.preventDefault()}
      >
        No Copyright
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Login = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState<IFormValues>({
    email: "",
    password: ""
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  const emailValidationRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleOnChange = (fieldName: keyof IFormValues) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormValues({ ...formValues, [fieldName]: event.target.value });
  };

  const handleSubmit = () => {};

  const emailValidation = () => {
    const { email } = formValues;
    const isValid = emailValidationRegex.test(email.toLowerCase());

    if (!isValid) {
      setErrorMsg("Invalid email format");
    } else {
      setErrorMsg("");
    }
  };

  return (
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
            helperText={errorMsg}
            error={errorMsg ? true : false}
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
    </Container>
  );
};

export default Login;
