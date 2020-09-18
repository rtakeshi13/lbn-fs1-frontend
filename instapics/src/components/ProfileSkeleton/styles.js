import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";

export const Wrapper = styled.div`
  margin-top: 3.75rem;
`;

export const AvatarSkeleton = styled(Skeleton)`
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

export const CountersSkeleton = styled(Skeleton)`
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

export const CollectionSkeleton = styled(Skeleton)`
  margin-top: 0.5rem;
  margin-left: 0.75rem;
`;

export const CollectionsWrapper = styled.div`
  display: flex;
`;
