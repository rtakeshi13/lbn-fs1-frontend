import React from "react";

import { useHistory, useLocation } from "react-router-dom";

import { AppFooter, Wrapper } from "./styles";

import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import DynamicFeedOutlinedIcon from "@material-ui/icons/DynamicFeedOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";

const Footer = () => {
  const history = useHistory();
  const location = useLocation();

  const handleNavClick = (aaa) => () => {
    console.log(aaa);
  };

  return (
    <AppFooter>
      <Wrapper>
        <DynamicFeedOutlinedIcon onClick={handleNavClick("ola")} />
        <AddAPhotoOutlinedIcon />
        <AccountBoxOutlinedIcon onClick={handleNavClick("oie")} />
      </Wrapper>
    </AppFooter>
  );
};

export default Footer;
