import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

export const ProfilePicture = styled(Avatar)`
  width: 3rem;
  height: 3rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  height: 4rem;

  display: flex;

  cursor: pointer;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  margin-top: 0.75rem;
  margin-left: 0.5rem;
`;

export const Subtitle = styled.span`
  margin-left: 0.5rem;
`;
