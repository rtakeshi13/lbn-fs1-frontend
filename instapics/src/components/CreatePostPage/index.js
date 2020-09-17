import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../contexts/AppContext";

import { useHistory } from "react-router-dom";

import { storageRef } from "../../services/firebase";
import { createPost } from "../../services/axios";
import { getNickname } from "../../services/localStorage";

import Select from "react-select";

import { Preview, Caption, PostButton } from "./styles";

import { getCollections } from "../../services/axios";

function CreatePostPage() {
  const appContext = useContext(AppContext);
  const [caption, setCaption] = useState("");
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [collectionOptions, setCollectionOptions] = useState([]);
  const history = useHistory();
  const nickname = getNickname();

  useEffect(() => {
    (async () => {
      const collections = await getCollections();
      setCollectionOptions(collections);
    })();
  }, []);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSelectChange = (value) => {
    setSelectedCollections(value);
  };

  const handleUpload = async () => {
    const imageRef = storageRef.child(
      nickname + "/" + Date.now().toString().concat(appContext.image.file.name)
    );
    await imageRef.put(appContext.image.file);
    const mediaUrl = await imageRef.getDownloadURL();

    const collectionsIds = selectedCollections.map((item) => item.value);
    const postDto = { caption, mediaUrl, collectionsIds };
    await createPost(postDto);

    history.replace(`/${nickname}`);
  };

  return (
    <div>
      <Preview
        alt="alt"
        src={appContext.image.localURL}
        // src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/05/Gollum.jpg"
      />
      <Caption value={caption} onChange={handleCaptionChange} autoFocus />
      <Select
        closeMenuOnSelect={false}
        blurInputOnSelect={false}
        options={collectionOptions}
        isMulti
        placeholder="(Optional) Add to colections"
        value={selectedCollections}
        onChange={handleSelectChange}
      />
      <PostButton onClick={handleUpload}>Post</PostButton>
    </div>
  );
}

export default CreatePostPage;
