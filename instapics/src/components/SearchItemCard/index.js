import React, { useState } from "react";
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
    if (item.tag) history.push(`/explore/${item.tag.replace("#", "")}`);
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
      <ProfilePicture>#</ProfilePicture>
      <TextWrapper>
        <Title>{text.title}</Title>
        <Subtitle>{text.subtitle}</Subtitle>
      </TextWrapper>
    </Wrapper>
  );
}

export default SearchItemCard;
