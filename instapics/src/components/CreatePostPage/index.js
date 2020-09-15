import React, { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";

import { useHistory } from "react-router-dom";

import { storageRef } from "../../services/firebase";
import { createPost } from "../../services/axios";
import { getNickname } from "../../services/localStorage";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import { Preview, Caption, PostButton } from "./styles";

function CreatePostPage() {
  const appContext = useContext(AppContext);
  const [caption, setCaption] = useState("");
  const [collectionsIds, setCollectionsIds] = useState([]);
  const history = useHistory();
  const nickname = getNickname();

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleUpload = async () => {
    const imageRef = storageRef.child(
      nickname + "/" + Date.now().toString().concat(appContext.image.file.name)
    );
    await imageRef.put(appContext.image.file);
    const mediaUrl = await imageRef.getDownloadURL();

    const postDto = { caption, mediaUrl, collectionsIds };
    await createPost(postDto);

    history.replace(`/${nickname}`);
  };
  const animatedComponents = makeAnimated();

  const options = [
    { value: 13, label: "oi" },
    { value: 14, label: "oi" },
    { value: 15, label: "oi" },
  ];
  return (
    <div>
      <Preview
        alt="alt"
        src={appContext.image.localURL}
        src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/05/Gollum.jpg"
      />
      <Caption value={caption} onChange={handleCaptionChange} autoFocus />
      <Select
        closeMenuOnSelect={false}
        blurInputOnSelect={false}
        options={options}
        isMulti
        components={animatedComponents}
        placeholder="(Optional) Add to colections"
      />
      <PostButton onClick={handleUpload}>Post</PostButton>
    </div>
  );
}

export default CreatePostPage;
