import React from "react";

function ImageCard({ fileList, fileRemove }) {
  return (
    <>
      {fileList.map((item, index) => (
        <div key={index} className="drop-file-preview__item">
          <div className="drop-items">
            <img
              src={URL.createObjectURL(item)}
              alt=""
              className="drop-upload-file"
            />
            <input type="text" placeholder="Name...." className="drop-input" />
          </div>
          <button
            className="drop-file-preview__item__del"
            onClick={() => fileRemove(item)}>
            &times;
          </button>
        </div>
      ))}
    </>
  );
}

export default ImageCard;
