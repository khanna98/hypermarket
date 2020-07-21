import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";

const FileUpload = ({ handleImages }: any) => {
  return (
    <div>
      <DropzoneArea
        acceptedFiles={["image/jpeg", "image/png", "image/jpg"]}
        showPreviews={false}
        maxFileSize={1000000}
        onChange={(files) => handleImages(files)}
      />
    </div>
  );
};
export default FileUpload;
