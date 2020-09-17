import React from "react";
import { useHistory } from "react-router-dom";
import {
  Wrapper,
  ProfilePicture,
  TextWrapper,
  Title,
  Subtitle,
} from "./styles";

function SearchItemCard({ item }) {
  const history = useHistory();

  const handleClick = () => {
    if (item.tag)
      history.push(`/tags/${item.tag.replace("#", "")}/${item.postsCount}`);
    else history.push(`/${item.nickname}`);
  };

  let text;
  if (item.tag) {
    text = { title: item.tag, subtitle: `${item.postsCount} posts` };
  } else {
    text = { title: item.nickname, subtitle: item.name };
  }

  return (
    <Wrapper onClick={handleClick}>
      <ProfilePicture
        src={
          item.tag
            ? undefined
            : "https://miro.medium.com/max/395/0*yt7Mwvdb8e08xxhk.jpg"
        }
      >
        #
      </ProfilePicture>
      <TextWrapper>
        <Title>{text.title}</Title>
        <Subtitle>{text.subtitle}</Subtitle>
      </TextWrapper>
    </Wrapper>
  );
}

export default SearchItemCard;
