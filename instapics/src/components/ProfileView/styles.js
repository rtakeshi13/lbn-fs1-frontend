import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

export const Wrapper = styled.div`
  height: 240px;

  /* display: grid; */
  display: flex;
  flex-direction: column;
`;

export const ProfilePicture = styled(Avatar)`
  width: 5rem;
  height: 5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
`;

export const CounterWrapper = styled.div`
  height: 3rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-top: 1px solid blue;
  border-bottom: 1px solid blue;
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
