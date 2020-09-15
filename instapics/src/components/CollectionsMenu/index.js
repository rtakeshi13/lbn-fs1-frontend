import React from "react";
import {
  CollectionWrapper,
  CollectionMenu,
  Collection,
  CollectionThumbnail,
  CollectionName,
} from "./styles";
import AddIcon from "@material-ui/icons/Add";

function CollectionsMenu({ collections }) {
  const collectionsRender = collections.map((item) => (
    <Collection key={item.id}>
      <CollectionThumbnail src={item.thumbnailUrl} />
      <CollectionName>{item.name}</CollectionName>
    </Collection>
  ));

  return (
    <CollectionWrapper>
      <CollectionMenu cols={4}>
        {/* Create new collection button */}
        <Collection>
          <CollectionThumbnail
            onClick={() => {
              console.log(Date.now());
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
