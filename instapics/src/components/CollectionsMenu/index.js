import React from "react";
import { useHistory } from "react-router-dom";
import {
  CollectionWrapper,
  CollectionMenu,
  Collection,
  CollectionThumbnail,
  CollectionName,
} from "./styles";
import AddIcon from "@material-ui/icons/Add";

function CollectionsMenu({ collections }) {
  const history = useHistory();

  const collectionsRender = collections.map((item) => (
    <Collection key={item.id}>
      <CollectionThumbnail src={item.thumbnailUrl} />
      <CollectionName>{item.name.slice(0, 8)}</CollectionName>
    </Collection>
  ));

  return (
    <CollectionWrapper>
      <CollectionMenu cols={1}>
        {/* Create new collection button */}
        <Collection>
          <CollectionThumbnail
            onClick={() => {
              history.push("/collection/create");
            }}
          >
            <AddIcon color="action" />
          </CollectionThumbnail>
          <CollectionName>01234567</CollectionName>
        </Collection>
        {collectionsRender}
      </CollectionMenu>
    </CollectionWrapper>
  );
}

export default CollectionsMenu;
