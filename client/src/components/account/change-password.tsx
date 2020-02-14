import React, { useState } from "react";
import {
  Paper,
  makeStyles,
  Button,
  Dialog,
  TextField,
  Divider
} from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";
import ModalTitle from "components/public/customized-modal-title";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2, 1),
    textAlign: "right"
  },
  paper: {
    margin: theme.spacing(2),
    minWidth: 400
  },
  formInput: {
    margin: theme.spacing(2, 1)
  }
}));

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

    if (!validateRetypedPassword()) {
      setError(true);
    } else {
      setError(false);
      // handle submit
    }
  };

  const handleOnChange = (fieldName: keyof IForm) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormValues({ ...formValues, [fieldName]: event.target.value });
  };

  const validateRetypedPassword = (): boolean => {
    const { newPassword, retypePassword } = formValues;
    return newPassword === retypePassword;
  };

  const handleClose = () => {
    setIsVisible(false);
    setError(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setIsVisible(true)}
      >
        Change Password
      </Button>
      <Dialog
        onClose={() => handleClose()}
        aria-labelledby="customized-dialog-title"
        open={isVisible}
      >
        <ModalTitle onClose={() => handleClose()}>Change Password</ModalTitle>
        <Divider />
        <form onSubmit={onSubmit}>
          <Paper elevation={0} className={passwordStyle.paper}>
            <div className={passwordStyle.formInput}>
              <TextField
                label="Old Password"
                autoFocus
                variant="outlined"
                required
                fullWidth
                size="small"
                onChange={handleOnChange("oldPassword")}
              />
            </div>
            <div className={passwordStyle.formInput}>
              <TextField
                label="New Password"
                variant="outlined"
                required
                fullWidth
                size="small"
                type="password"
                error={error}
                onChange={handleOnChange("newPassword")}
              />
            </div>
            <div className={passwordStyle.formInput}>
              <TextField
                label="Confirm New Password"
                variant="outlined"
                required
                fullWidth
                error={error}
                size="small"
                type="password"
                helperText={error ? "New password does not match" : ""}
                onChange={handleOnChange("retypePassword")}
              />
            </div>
            <div className={passwordStyle.button}>
              <Button variant="contained" color="secondary" type="submit">
                Update
              </Button>
            </div>
          </Paper>
        </form>
      </Dialog>
    </>
  );
};

export default ChangePassword;
