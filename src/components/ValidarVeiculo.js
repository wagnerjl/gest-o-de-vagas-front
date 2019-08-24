import React, { Component } from 'react'
import Webcam from "react-webcam"
import Axios from 'axios'

export default class SolicitarVaga extends Component {

  setRef = webcam => {
    this.webcam = webcam
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot()
    console.log(imageSrc)
    const host = "http://192.168.37.13"
    const port = 8080
    const route = 'recuperarPlaca'
    const getBoard = `${host}:${port}/${route}`

    console.log("********************************", getBoard)

    Axios.post(getBoard, {
      imagem: imageSrc
    })
    .then(function (response) {
      console.log(response.body)
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    )
  }
}


