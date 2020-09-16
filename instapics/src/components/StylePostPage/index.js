import React, { useContext, useState, useEffect, useCallback } from "react";
import AppContext from "../../contexts/AppContext";

import { useHistory } from "react-router-dom";

import { storageRef } from "../../services/firebase";
import { createPost } from "../../services/axios";
import { getNickname } from "../../services/localStorage";

import Select from "react-select";

import {
  Preview,
  Caption,
  PostButton,
  CropContainer,
  CropControls,
} from "./styles";

import { getCollections } from "../../services/axios";

import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";

function CreatePostPage() {
  const appContext = useContext(AppContext);
  const [caption, setCaption] = useState("");
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [collectionOptions, setCollectionOptions] = useState([]);
  const history = useHistory();
  const nickname = getNickname();

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

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
      <CropContainer>
        <Cropper
          crop={crop}
          zoom={zoom}
          aspect={4 / 5}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          //   image={appContext.image.localURL}
          image="https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/05/Gollum.jpg"
        />
      </CropContainer>
      <CropControls>
        <Slider
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e, zoom) => setZoom(zoom)}
          classes={{ container: "slider" }}
        />
      </CropControls>
      {/* <Caption value={caption} onChange={handleCaptionChange} autoFocus />
      <Select
        closeMenuOnSelect={false}
        blurInputOnSelect={false}
        options={collectionOptions}
        isMulti
        placeholder="(Optional) Add to colections"
        value={selectedCollections}
        onChange={handleSelectChange}
      />
      <PostButton onClick={handleUpload}>Post</PostButton> */}
    </div>
  );
}

export default CreatePostPage;
