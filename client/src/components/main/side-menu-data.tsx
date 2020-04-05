import React from "react";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";

type IData = Array<{
  icon: () => JSX.Element;
  text: string;
  url: string;
}>;

const SIDE_MENU_DATA: IData = [
  {
    icon: () => <AssessmentOutlinedIcon fontSize="large" />,
    text: "Apis",
    url: "user-api",
  },
  {
    icon: () => <AccountBoxOutlinedIcon fontSize="large" />,
    text: "Account",
    url: "account",
  },
];

export { SIDE_MENU_DATA };
