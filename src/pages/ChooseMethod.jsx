import React, { use, useRef, useState } from "react";
import Nav from "../components/Nav/Nav";
import BackArrow from "../assets/images/back--arrow.png";
import { Link, useNavigate } from "react-router-dom";
import GalleryImg from "../assets/images/gallery.png";
import CameraImg from "../assets/images/camera.png";

export default function ChooseMethod() {
  const fileInputRef = useRef(null);
  const [base64Image, setBase64Image] = useState("");
  const [demData, setDemData] = useState("");

  const navigate = useNavigate();

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
      setDemData(result.data);
      localStorage.setItem("dem-data", JSON.stringify(result.data)); // Save to localStorage
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleGalleryClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger file manager
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result); // Save Base64 string
        console.log("Base64 Image:", reader.result);
        sendImageData(reader.result);
        navigate("/prep");
      };
      reader.readAsDataURL(file); // Convert to Base64
    }
  };

  return (
    <div className="choose-method__container">
      <Nav label={"INTRO"} getCode={false} />
      <div className="mini__header">TO START ANALYSIS</div>
      <div className="img__container">
        <img
          className="method__img left__img"
          src={GalleryImg}
          alt="Choose from gallery"
          onClick={handleGalleryClick}
          style={{ cursor: "pointer" }}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <Link to="/camera">
          <img className="method__img right__img" src={CameraImg} alt="" />
        </Link>
      </div>
      <Link to={"/location"}>
        <figure className="back--arrow">
          <img src={BackArrow} alt="Go back" />
        </figure>
      </Link>
    </div>
  );
}
