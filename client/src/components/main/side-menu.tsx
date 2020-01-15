import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";

interface IProps {
  isOpen: boolean;
  handleClose: (flag: boolean) => void;
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    height: "100vh",
    overflowX: "hidden",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  }

  // appBarSpacer: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   height: "100vh",
  //   overflow: "auto"
  // },
  // container: {
  //   paddingTop: theme.spacing(4),
  //   paddingBottom: theme.spacing(4)
  // },
  // paper: {
  //   padding: theme.spacing(2),
  //   display: "flex",
  //   overflow: "auto",
  //   flexDirection: "column"
  // },
  // fixedHeight: {
  //   height: 240
  // }
}));

const SideMenu: React.FC<IProps> = props => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !props.isOpen && classes.drawerPaperClose
        )
      }}
      open={props.isOpen}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={() => props.handleClose(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <AssessmentOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="APIs" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountBoxOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;
