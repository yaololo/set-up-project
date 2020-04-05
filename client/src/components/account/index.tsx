import React, { useEffect } from "react";
import {
  makeStyles,
  Typography,
  Paper,
  Grid,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import ChangePassword from "./change-password";
import { NormalInput } from "components/public/customized-input";
import userStore from "store/user";
import { useObserver } from "mobx-react";

const useStyles = makeStyles((theme) => ({
  form: {
    boxSizing: "border-box",
    padding: 20,
  },
  formItem: {
    marginTop: theme.spacing(2),
  },
  item: {
    padding: theme.spacing(2, 0),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    width: "100%",
    margin: theme.spacing(1, 1, 1, 0),
  },
}));

const Account = () => {
  const classes = useStyles();
  console.log("userProfile", userStore);
  return useObserver(() => (
    <Paper className={classes.form}>
      <Typography variant="h6">Account Settings</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel shrink>Email</InputLabel>
        <NormalInput value={userStore.userProfile?.email} disabled fullWidth />
      </FormControl>

      <div className={classes.item}>
        <ChangePassword></ChangePassword>
      </div>
      <Grid container spacing={3} className={classes.formItem}>
        <Grid item xs={4} md={1} lg={1}>
          <Typography variant={"body1"}>API_KEY:</Typography>
        </Grid>
        <Grid item xs={8} md={11} lg={11}>
          <Typography variant={"body1"}>kEYSDFOEJZXIO</Typography>
        </Grid>
      </Grid>
    </Paper>
  ));
};

export default Account;
