import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  Button,
  Dialog,
  DialogTitle
} from "@material-ui/core";
import { NormalInput } from "components/public/customized-input";
import { lightBlue } from "@material-ui/core/colors";
import ModalTitle from "components/public/customized-modal-title";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1, 1, 1, 0)
  },
  button: {
    marginTop: theme.spacing(3),
    color: "white"
  }
}));

const buttonTheme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[400]
    }
  },
  typography: {
    button: {
      textTransform: "none"
    }
  }
});

interface IForm {
  oldPassword: string;
  newPassword: string;
  retypePassword: string;
}

const ChangePassword = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IForm>({
    oldPassword: "",
    newPassword: "",
    retypePassword: ""
  });

  const passwordStyle = useStyles();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handle Submit form
  };

  const handleOnChange = (fieldName: keyof IForm) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormValues({ ...formValues, [fieldName]: event.target.value });
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setIsVisible(true)}
      >
        Change Password
      </Button>
      <Dialog
        onClose={() => setIsVisible(false)}
        aria-labelledby="customized-dialog-title"
        open={isVisible}
      >
        <ModalTitle
          id="customized-dialog-title"
          onClose={() => setIsVisible(false)}
        >
          Change Password
        </ModalTitle>

        <form onSubmit={onSubmit}>
          <FormControl className={passwordStyle.formControl}>
            <InputLabel shrink htmlFor="old-password">
              Old Password
            </InputLabel>
            <NormalInput
              id="old-password"
              placeholder="Old Password"
              required
              onChange={handleOnChange("oldPassword")}
            />
          </FormControl>
          <FormControl className={passwordStyle.formControl}>
            <InputLabel shrink htmlFor="new-password">
              New Password
            </InputLabel>
            <NormalInput
              id="new-password"
              placeholder="New Password"
              required
              onChange={handleOnChange("newPassword")}
            />
          </FormControl>
          <FormControl className={passwordStyle.formControl}>
            <InputLabel shrink htmlFor="retype-password">
              Retype New Password
            </InputLabel>
            <NormalInput
              id="retype-password"
              placeholder="Retype Password"
              required
              onChange={handleOnChange("retypePassword")}
            />
          </FormControl>
          <ThemeProvider theme={buttonTheme}>
            <FormControl className={passwordStyle.formControl}>
              <Button
                variant="contained"
                color="primary"
                className={passwordStyle.button}
                type={"submit"}
              >
                Update
              </Button>
            </FormControl>
          </ThemeProvider>
        </form>
      </Dialog>
    </>
  );
};

export default ChangePassword;
