import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import Avatar from "@material-ui/core/Avatar";

export const PostDialog = styled(Dialog)`
  background: black;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 4fr 1fr;
  grid-template-areas:
    "img img img"
    "avt txt txt";
`;

export const Image = styled.img`
  grid-area: img;

  height: 50vh;
`;

export const ProfilePicture = styled(Avatar)`
  grid-area: avt;
  width: 3rem;
  height: 3rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
`;

export const TextWrapper = styled.div`
  grid-area: txt;

  display: flex;
  flex-direction: column;
`;

export const Caption = styled.span`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;

export const CreationDate = styled.div`
  margin-right: 1rem;
  font-size: 0.75rem;
  text-align: right;
`;
