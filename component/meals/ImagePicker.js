"use client";
import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function pickHandler() {
    imageInput.current.click();
  }

  function imageChangeHandler(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
     
      <div className={classes.controls}>
       <div className={classes.preview}>
        {!pickedImage && <p>No image selected yet!</p>}
        {pickedImage && <Image src={pickedImage} alt="the selected image" fill/>}
      </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/jpeg , image/png"
          name={name}
          ref={imageInput}
          onChange={imageChangeHandler}
          required
        />

        <button className={classes.button} type="button" onClick={pickHandler}>
          Pick an image
        </button>
      </div>
    </div>
  );
}
