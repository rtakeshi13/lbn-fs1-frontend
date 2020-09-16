import styled from "styled-components";

export const Preview = styled.img`
  width: 100%;
  height: 50vh;
  margin-top: 1rem;
`;

export const Caption = styled.textarea`
  width: 100%;
  height: 10vh;
  padding: 0.5rem;
  resize: none;
  margin-top: 0.75rem;
`;

export const PostButton = styled.button`
  width: 50%;
  margin-left: 50%;
  margin-top: 0.75rem;
`;

export const CropContainer = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  right: 0;
  bottom: 40vh;
`;

export const CropControls = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 50%;
  width: 50%;
  transform: translateX(-50%);
  height: 80px;
  display: flex;
  align-items: center;
`;
