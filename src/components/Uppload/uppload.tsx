import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {UploadText} from '../../styles/globalStyle'

export default function Uppload() {
  const [paths, setPaths] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setPaths(acceptedFiles.map(file => URL.createObjectURL(file)));
  }, [setPaths]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
     { paths.length == 0 ? <UploadText>UPLOAD COVER FOTO</UploadText> : null}
       {paths.map((path) => 
        <img key={path} src={path} />
      ) }
      </div>
    </div>
  );
}