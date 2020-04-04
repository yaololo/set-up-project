import React from "react";
import { Button } from "@material-ui/core";

interface IProps {
  color?: "inherit" | "primary" | "secondary" | "default";
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  type?: "reset" | "submit";
  isLoading?: boolean;
  className: any;
}

const CustomizedButton: React.FC<IProps> = props => {
  const { isLoading } = props;
  const propObject = Object.assign({}, props);
  delete propObject.isLoading;

  return <Button {...propObject}></Button>;
};

export default CustomizedButton;
