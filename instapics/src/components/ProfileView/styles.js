import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

export const Wrapper = styled.div`
  border: 1px solid red;

  height: 220px;

  display: grid;
`;

export const ProfilePicture = styled(Avatar)`
  width: 5rem;
  height: 5rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

export const CounterWrapper = styled.div`
  height: 5rem;

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
