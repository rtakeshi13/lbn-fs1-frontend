import React from "react";
import { useHistory } from "react-router-dom";
import { getNickname } from "../../services/localStorage";

function LandingPage() {
  const history = useHistory();
  const nickname = getNickname();

  if (nickname) {
    history.push(`/${nickname}`);
  } else {
    history.push("/accounts/login");
  }
  return <div>oi</div>;
}

export default LandingPage;
