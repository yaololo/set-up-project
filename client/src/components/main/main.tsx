import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./footer";
import { Container, Grid, Paper, Box } from "@material-ui/core";
import clsx from "clsx";
import Copyright from "components/common/copyright";

const MainContent = () => {
  const useStyles = makeStyles(theme => {
    return {
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        position: "relative"
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        boxSizing: "border-box"
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
        padding: 15
      }
    };
  });

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>{/* <Chart /> */}</Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>{/* <Deposits /> */}</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>{/* <Orders /> */}</Paper>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.footer}>
        <Copyright />
      </div>
    </main>
  );
};

export default MainContent;
