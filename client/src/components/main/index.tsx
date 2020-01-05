import React, { useState } from "react";
import { useStyles } from "./style";
import DashboardHeader from "./dashboard-header";

const Main = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DashboardHeader
        isDrawerOpen={isDrawerOpen}
        handleDrawerOpen={setIsDrawerOpen}
      />
    </div>
  );
};

export default Main;
