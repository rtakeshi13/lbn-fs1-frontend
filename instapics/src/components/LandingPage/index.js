import React from "react";
import { useHistory } from "react-router-dom";

function LandingPage() {
  const history = useHistory();
  const userData = JSON.parse(localStorage.getItem("labepics"));
  if (userData) {
    history.push(`/${userData.nickname}`);
  } else {
    history.push("/accounts/login");
  }
  return <div>oi</div>;
}

export default LandingPage;
