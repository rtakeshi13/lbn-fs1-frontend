import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";

import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";

import { storageRef } from "../../services/firebase";
import { createCollection } from "../../services/axios";
import { getNickname } from "../../services/localStorage";

import { Preview, Name, Description, PostButton } from "./styles";

function CreatePostPage() {
  const appContext = useContext(AppContext);
  const [form, handleFormChange] = useForm({
    name: "",
    description: "",
  });
  const history = useHistory();
  const nickname = getNickname();

  const handleCreateCollection = async () => {
    const collectionDto = {
      thumbnailUrl: "https://miro.medium.com/max/395/0*yt7Mwvdb8e08xxhk.jpg",
      ...form,
    };
    await createCollection(collectionDto);
    history.replace(`/${nickname}`);
  };

  return (
    <div>
      <Preview
        alt="alt"
        // src={appContext.image.localURL}
        src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/05/Gollum.jpg"
      />
      <Name value={form.name} onChange={handleFormChange} name="name" />
      <Description
        value={form.description}
        onChange={handleFormChange}
        name="description"
      />

      <PostButton onClick={handleCreateCollection}>Create</PostButton>
    </div>
  );
}

export default CreatePostPage;
