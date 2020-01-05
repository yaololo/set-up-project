import React from "react";
import { Link, Typography } from "@material-ui/core";

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="#"
        onClick={(e: React.MouseEvent) => e.preventDefault()}
      >
        No Copyright
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
