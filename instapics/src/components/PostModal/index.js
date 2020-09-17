import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  PostDialog,
  Image,
  ProfilePicture,
  TextWrapper,
  Caption,
  CreationDate,
} from "./styles";
import Slide from "@material-ui/core/Slide";
import { formatPostAge } from "../../services/dateFormatter";

function PostModal({ post, isOpen, handleClose }) {
  const transition = React.forwardRef((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
  ));

  const captionRender =
    post &&
    post.caption.split(" ").map((item) =>
      !item.match(/#\w/) ? (
        <span>{item} </span>
      ) : (
        //TODO: esse page 10 gambiarra
        <span>
          <Link to={`/tags/${item.replace("#", "")}/10`}>{item}</Link>{" "}
        </span>
      )
    );

  return post ? (
    <>
      <PostDialog
        fullscreen
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={transition}
      >
        <Wrapper>
          <Image src={post.mediaUrl} />
          <ProfilePicture src={post.avatarUrl} />
          <TextWrapper>
            <Caption>{captionRender}</Caption>
            <CreationDate>{formatPostAge(post.createdAt)}</CreationDate>
          </TextWrapper>
        </Wrapper>
      </PostDialog>
    </>
  ) : null;
}

export default PostModal;
