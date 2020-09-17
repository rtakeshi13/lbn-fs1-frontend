import React from "react";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  return <div>404</div>;
}

export default NotFound;
