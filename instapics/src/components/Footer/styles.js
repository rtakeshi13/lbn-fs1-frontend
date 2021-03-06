import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";

export const AppFooter = styled(AppBar)`
  display: ${({ hidden }) => (hidden ? "none" : "inherit")};

  height: 3rem;
  background-color: #ff6d3c;
  color: white;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2),
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  top: auto;
  bottom: 0;
  position: fixed;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;
