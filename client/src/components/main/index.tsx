import React, { useState, useCallback, useEffect } from "react";
import DashboardHeader from "./dashboard-header";
import SideMenu from "./side-menu";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainContent from "./main";
import userStore from "@/store/user";
import { useObserver } from "mobx-react";
import { useHistory } from "react-router-dom";

const Main = () => {
  const [open, setOpen] = React.useState(true);
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    }
  }));

  const classes = useStyles();
  const history = useHistory();

  const userAuthentication = useCallback(async () => {
    if (!userStore.isProfileSet()) {
      try {
        await userStore.getProfile();
      } catch (e) {
        history.push("/login");
      }
    }
  }, [userStore.userProfile]);

  useEffect(() => {
    userAuthentication();
  }, []);

  return useObserver(() => (
    <div className={classes.root}>
      <CssBaseline />
      <DashboardHeader
        isDrawerOpen={open}
        handleDrawerOpen={setOpen}
      ></DashboardHeader>
      <SideMenu isOpen={open} handleClose={setOpen} />
      <MainContent />
    </div>
  ));
};

export default Main;
