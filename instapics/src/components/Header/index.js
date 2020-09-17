import React from "react";
import { useHistory } from "react-router-dom";

import { AppHeader, Wrapper, BackButton, Title, LogoutButton } from "./styles";

const Header = (props) => {
  const { title, back } = props;
  const history = useHistory();

  const handleGoBackClick = () => {
    if (history.location.pathname === "/address") {
      history.push("/orders");
    } else {
      history.goBack();
    }
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("labepics");
    history.replace("/");
  };

  return (
    <AppHeader>
      <Wrapper>
        {back && <BackButton onClick={handleGoBackClick} />}
        <Title>{title}</Title>
        <LogoutButton onClick={handleLogoutClick} />
      </Wrapper>
    </AppHeader>
  );
};

export default Header;
