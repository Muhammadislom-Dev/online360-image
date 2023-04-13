import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./DropfileInput.css";
import { ImageConfig } from "../config/ImageConfig";
import uploadImg1 from "../assets/cloud-upload-regular-240.png";
import home from "../assets/photo.svg";

const DropFileInput = (props) => {
  const [uploadImg, setuploadImg] = useState(null);
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  console.log(fileList);

  return (
    <div className="drop-list">
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}>
        <div className="drop-file-input__label">
          <img src={uploadImg1} alt="" className="drop-image" />
        </div>
        <input
          accept="image/png, image/gif, image/jpeg, image/jpg"
          type="file"
          value=""
          onChange={onFileDrop}
        />
      </div>
      <div className="drop-item">
        <img src={home} alt="" className="drop-icon" />
        <h3>Добавить</h3>
      </div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item">
              <div className="drop-items">
                <img
                  src={
                    ImageConfig[item.type.split("/")[1]] ||
                    ImageConfig["default"]
                  }
                  alt=""
                  className="drop-upload-file"
                />
                <input
                  type="text"
                  placeholder="Name...."
                  className="drop-input"
                />
              </div>
              <button
                className="drop-file-preview__item__del"
                onClick={() => fileRemove(item)}>
                &times;
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
