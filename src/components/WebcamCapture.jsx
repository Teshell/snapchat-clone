import { useCallback, useRef } from "react";

import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { setCameraImage } from "../features/cameraSlice";
import { useNavigate } from "react-router-dom";

import "./WebcamCapture.css";

const videoContraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    dispatch(setCameraImage(imageSrc));
    navigate("/preview", { replace: true });
  }, [webcamRef]);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoContraints.height}
        width={videoContraints.width}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoContraints}
      />

      <RadioButtonUncheckedIcon
        className="webcamCapture__button"
        onClick={capture}
      />
    </div>
  );
};

export default WebcamCapture;
