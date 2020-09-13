import React, { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import { storageRef } from "../../App";
import { createPost } from "../../functions/axios";

function CreatePage() {
  const appContext = useContext(AppContext);
  const [caption, setCaption] = useState("");

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleUpload = async () => {
    const imageRef = storageRef.child(
      JSON.parse(localStorage.getItem("labepics")).nickname +
        "/" +
        // Date.now().toString().concat(appContext.image.file.name)
        appContext.image.file.name
    );
    await imageRef.put(appContext.image.file);
    const mediaUrl = await imageRef.getDownloadURL();

    const postDto = { caption, mediaUrl, collectionId: "1" };
    await createPost(postDto);
  };
  return (
    <div style={{ backgroundColor: "#212223" }}>
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
