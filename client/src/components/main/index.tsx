import React, { useState } from "react";
import DashboardHeader from "./dashboard-header";
import SideMenu from "./side-menu";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainContent from "./main";

const Main = () => {
  const [open, setOpen] = React.useState(true);
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashboardHeader
        isDrawerOpen={open}
        handleDrawerOpen={setOpen}
      ></DashboardHeader>
      <SideMenu isOpen={open} handleClose={setOpen} />
      <MainContent />
    </div>
  );
};

export default Main;
