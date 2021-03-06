import React, { useRef, useContext } from "react";
import AppContext from "../../contexts/AppContext";

import { useHistory } from "react-router-dom";

import { AppFooter, Wrapper } from "./styles";

import IconButton from "@material-ui/core/IconButton";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import DynamicFeedOutlinedIcon from "@material-ui/icons/DynamicFeedOutlined";
import SearchIcon from "@material-ui/icons/Search";

const Footer = () => {
  const history = useHistory();
  const imageInput = useRef();
  const appContext = useContext(AppContext);

  const handleNavClick = (path) => () => {
    history.push(path);
  };

  const handleImageInputChange = () => {
    const localURL = URL.createObjectURL(imageInput.current.files[0]);
    appContext.setImage({ file: imageInput.current.files[0], localURL });
    history.push("/create");
  };

  const isHidden = history.location.pathname.match(/login|signup/);

  return (
    <AppFooter hidden={isHidden}>
      <Wrapper>
        <IconButton
          component="span"
          style={{ color: "white" }}
          onClick={handleNavClick("/feed")}
        >
          <DynamicFeedOutlinedIcon />
        </IconButton>

        <input
          id="fileUpload"
          accept="image/*"
          type="file"
          ref={imageInput}
          onChange={handleImageInputChange}
          hidden
        />
        <label htmlFor="fileUpload">
          <IconButton component="span" style={{ color: "white" }}>
            <AddAPhotoOutlinedIcon />
          </IconButton>
        </label>

        <IconButton
          component="span"
          style={{ color: "white" }}
          onClick={handleNavClick("/search")}
        >
          <SearchIcon />
        </IconButton>
      </Wrapper>
    </AppFooter>
  );
};

export default Footer;
