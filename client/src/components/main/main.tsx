import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import clsx from "clsx";
import Copyright from "components/common/copyright";
import MainRoutes from "./routes";

const MainContent = () => {
  const useStyles = makeStyles(theme => {
    return {
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        boxSizing: "border-box",
        marginBottom: 38
      },
      paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
      },
      fixedHeight: {
        height: 240
      },
      footer: {
        position: "absolute",
        bottom: 0,
        boxSizing: "border-box",
        width: "100%",
        padding: 15,
        backgroundColor: "#e3e3e3"
      }
    };
  });

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <MainRoutes />
        </Container>
      </main>
      <div className={classes.footer}>
        <Copyright />
      </div>
    </div>
  );
};

export default MainContent;
