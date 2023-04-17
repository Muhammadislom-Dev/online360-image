import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./DropfileInput.css";
import uploadImg1 from "../assets/cloud-upload-regular-240.png";
import home from "../assets/photo.svg";
import ImageCard from "./ImageCard/ImageCard";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);
  const [picture, setPicture] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

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

  const onChangePicture = (data) => {
    setPicture(data);
  };


  return (
    <div className="drop-list">
      <div className="drop-page">
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
            onChange={(e) => {
              onFileDrop()
              onChangePicture(e.target.files[0]);
            }}
          />
        </div>
        <div className="drop-item">
          <img src={home} alt="" className="drop-icon" />
          <h3>Добавить</h3>
        </div>
      </div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <ImageCard fileList={fileList} fileRemove={fileRemove} />
        </div>
      ) : null}
    </div>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
