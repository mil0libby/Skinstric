import React, { use, useEffect, useRef, useState } from "react";
import BackArrow from "../assets/images/white--back.png";
import ProceedArrow from "../assets/images/white--pro.png";
import CameraInfo from "../assets/images/camera-info.png";
import TakePic from "../assets/images/take-pic.png";
import { Link } from "react-router-dom";

const TakePhoto = () => {
  const videoRef = useRef(null);
  const [taken, setTaken] = useState(false);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const photoTaken = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    console.log("photo-taken");

    if (!video || !canvas) return;

    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, width, height);

    const imageData = canvas.toDataURL("image/png");
    setPhoto(imageData);
    setTaken(true);

    // Send image to backend
    const base64Only = imageData.replace(/^data:image\/png;base64,/, "");
    sendImageData(base64Only);
  };

  async function sendImageData(img64) {
    const url =
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo";
    const data = {
      image: img64,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Response:", result.data.race);
      localStorage.setItem("dem-data", JSON.stringify(result.data)); // Save to localStorage
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Unable to access the camera. Please check permissions.");
    }
  };

  useEffect(() => {
    handleCameraClick();
  }, []);

  return (
    <div className="camera__container">
      <nav className="cam__nav">
        <span className="cam__header">{`SKINSTRIC     [                  ]`}</span>
      </nav>
      {!taken && <video ref={videoRef} autoPlay playsInline width="400" />}
      {taken && photo && (
        <img
          className="captured__photo"
          src={photo}
          alt="Captured"
          width="400"
        />
      )}
      {!taken && (
        <button onClick={photoTaken}>
          <img className="img--take-pic" src={TakePic} alt="" />
        </button>
      )}
      {taken && <span className="great__shot">GREAT SHOT!</span>}
      <footer className="cam__footer">
        <Link to="/options">
          <img className="cam__arrow" src={BackArrow} alt="" />
        </Link>
        <img className="cam__info" src={CameraInfo} alt="" />
        <Link to={"/prep"}>
          <img className="cam__arrow" src={taken && ProceedArrow} alt="" />
        </Link>
      </footer>
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default TakePhoto;
