import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import GridList from "@material-ui/core/GridList";

export const CollectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: 1rem;
`;

export const CollectionMenu = styled(GridList)`
  align-items: center;
  flex-wrap: nowrap;
  transform: translate(0);
`;

export const Collection = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const CollectionThumbnail = styled(Avatar)`
  width: 3rem;
  height: 3rem;
  margin-left: 0.5rem;
`;

export const CollectionName = styled.span`
  font-size: 0.75rem;
  margin-left: 0.5rem;
`;
