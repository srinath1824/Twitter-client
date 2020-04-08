import React from "react";
import ReactPhotoGrid from "react-photo-grid";

function handleImageClick() {}

function PhotoGrid() {
  var imageData = [
    "https://picsum.photos/id/192/500/500",
    "https://picsum.photos/id/19/500/500",
    "https://picsum.photos/id/203/500/500",
    "https://picsum.photos/id/209/500/500",
  ];
  var imageGrid = (
    <ReactPhotoGrid onImageClick={handleImageClick} data={imageData} />
  );
  return <div>{imageGrid}</div>;
}

export default PhotoGrid;
