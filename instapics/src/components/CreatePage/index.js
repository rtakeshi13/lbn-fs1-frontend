import React, { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";

import { useHistory } from "react-router-dom";

import { storageRef } from "../../services/firebase";
import { createPost } from "../../services/axios";
import { getNickname } from "../../services/localStorage";

function CreatePage() {
  const appContext = useContext(AppContext);
  const [caption, setCaption] = useState("");
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

    const postDto = { caption, mediaUrl, collectionId: "1" };
    await createPost(postDto);
    history.replace(`/${nickname}`);
  };
  return (
    <div>
      <img
        src={appContext.image.localURL}
        style={{ width: "100vw", height: "40vh" }}
      />
      <textarea value={caption} onChange={handleCaptionChange} />
      <button onClick={handleUpload}>upload</button>
    </div>
  );
}

export default CreatePage;
